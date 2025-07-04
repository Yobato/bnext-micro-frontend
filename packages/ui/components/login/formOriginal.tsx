// 'use client';

// import { Toast } from 'primereact/toast';
// import { Ripple } from 'primereact/ripple';
// import { Button } from 'primereact/button';
// import { useRouter } from 'next/navigation';
// import { setUserInfo, setSession } from "@/utils/encrypted";
// import { Password } from 'primereact/password';
// import { InputText } from 'primereact/inputtext';
// import { actionLogin } from '@/utils/authService';
// import { FloatLabel } from "primereact/floatlabel";
// import { useMutation } from "@tanstack/react-query";
// import { Credentials } from "@/types/forms/formData";

// import { useState, useRef, useEffect, FormEvent } from "react";

// const FormLogin = () => {
//     const router = useRouter();
//     const toast = useRef<Toast>(null);

//     const [errorMsg, setMsgs] = useState<string>('a');
//     const [oldName, setOldNm] = useState<string>('a');
//     const [oldPass, setOldPs] = useState<string>('a');
//     const [loading, setLoad] = useState<boolean>(false);

//     const [credentialsData, setCredentialsData] = useState<Credentials>({ userName: '', password: '', ipAddres: '1.1.1.1' });

//     useEffect(() => {
//         document.body.classList.add('login');

//         return () => {
//             document.body.classList.remove('login');
//         };
//     }, []);

//     const validateLogin = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         if (credentialsData.userName == "" || credentialsData.password == "") {
//             let name = credentialsData.userName == "" ? "User Id" : "",
//                 pass = credentialsData.password == "" ? "Password" : "",
//                 and = (name != "" && pass != "") ? " and " : "";

//             showError("Fail Auth", "Please input " + name + and + pass);
//         }
//         else {
//             setLoad(true);
//             return handleLogin();
//         }
//     }

//     const { mutate: handleLogin } = useMutation({
//         mutationFn: async () => {
//             const response = await actionLogin('/user/user/login', credentialsData);
//             return response;
//         },
//         onSuccess(data) {
//             const MenuData = [{ menuGroup: data.data.menuGroup }]
//             const userInfo = [{ 
//                 userId: data.data.userId,
//                 userName: data.data.userName,
//                 branchCode: data.data.branchCode,
//                 branchName: data.data.branchName,
//                 userGroupName: data.data.userGroupName
//             }];

//             setUserInfo(userInfo);
//             localStorage.setItem('Menu', JSON.stringify(MenuData));
//             setSession();

//             toast.current?.show({
//                 severity: 'success',
//                 summary: "Assalamualaikum",
//                 detail: "Welcome " + data.data.userName,
//                 life: 3000,
//             });
//             setTimeout(() => {
//                 router.push('/home');
//             }, 2000);
//         },
//         onError(error) {
//             const msg = typeof (error) != 'undefined' ? error.toString() : "Can't comunicate with the service";
//             setLoad(false);
//             showError("Fail Auth", msg);
//         }
//     });

//     const showError = (errSummary: string, errMessage: string) => {
//         if (errorMsg != errMessage || (credentialsData.userName != oldName || credentialsData.password != oldPass)) {
//             let timeout = 3000;

//             setOldNm(credentialsData.userName);
//             setOldPs(credentialsData.password);
//             setMsgs(errMessage);

//             toast.current?.show({
//                 severity: 'error',
//                 summary: errSummary,
//                 detail: errMessage,
//                 life: timeout,
//             }),
//                 setTimeout(() => {
//                     setOldNm("a");
//                     setOldPs("a");
//                 }, timeout);
//         }
//     };

//     return (
//         <>
//             <div className="login-page">
//                 <div className="title">
//                     <div>
//                         <img src={"/layout/images/bnext.png"} className='sublogo' alt="bnext" />
//                     </div>
//                     <img src={"/layout/images/ldap.png"} className='ldap' alt="lock-screen" />
//                 </div>
//                 <div>
//                     <form onSubmit={validateLogin}>
//                         <FloatLabel className="mt-3 mb-6">
//                             <InputText id="userId" keyfilter="email" className="field-login w-full" tabIndex={1} autoComplete="off"
//                                 value={credentialsData.userName} onChange={(e) => setCredentialsData({ ...credentialsData, userName: e.target.value })} />
//                             <label htmlFor="userId">User Id</label>
//                         </FloatLabel>
//                         <FloatLabel className="pass-me mb-6 w-full">
//                             <Password 
//                                 inputId="password" inputClassName="field-login w-full" feedback={false} tabIndex={2} toggleMask autoComplete="off"
//                                 value={credentialsData.password} onChange={(e) => setCredentialsData({ ...credentialsData, password: e.target.value })} />
//                             <label htmlFor="password">Password</label>
//                         </FloatLabel>
//                         <center>
//                             <Button label="Login" icon="pi pi-key" className="btn-login bg-green p-ripple" tabIndex={3} loading={loading} disabled={false}>
//                                 <Ripple />
//                             </Button>
//                         </center>
//                     </form>
//                 </div>
//             </div>
//             <Toast ref={toast} />
//         </>
//     );
// }

// export default FormLogin;