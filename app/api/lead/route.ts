export async function POST(request:Request){
 let data:Record<string,unknown>;try{const parsed=await request.json();if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new Error();data=parsed as Record<string,unknown>}catch{return Response.json({error:'Проверьте данные формы.'},{status:400})}
 if(typeof data.name!=='string'||data.name.trim().length<2||data.name.length>100||typeof data.phone!=='string'||!/^7\d{10}$/.test(data.phone.replace(/\D/g,''))||data.consent!==true){return Response.json({error:'Укажите имя, российский номер телефона и согласие.'},{status:400})}
 const endpoint=process.env.LEAD_WEBHOOK_URL;
 if(!endpoint)return Response.json({error:'Приём заявок пока не подключён. Данные не отправлены. Свяжитесь с компанией после заполнения контактов на сайте.'},{status:503});
 try{const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:data.name.trim(),phone:data.phone,contactMethod:data.contactMethod,calculation:data.calculation,consent:true,createdAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000)});if(!response.ok)throw new Error('upstream');return Response.json({success:true})}catch{return Response.json({error:'Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.'},{status:502})}
}
