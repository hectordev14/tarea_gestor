import { createFileRoute } from '@tanstack/react-router'
import  supabase  from '../../client'
import React, { useState } from 'react'
export const Route = createFileRoute('/login/')({
    component: Index,
})



function Index() {
    interface Data{
        email: string ;
        password: string ;
        namee: string;
        error:string
    }
    const [data, setData] = useState<Data>({
        email: "",
        password: "",
        namee:"",
        error: ""
    });
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const {error: signUpError } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        })
        if (signUpError) {
            console.error("Error creando usuario:", signUpError.message)
            return;
        }
        const { error: insertError } = await supabase
            .from('useer')
            .insert({
                nombre: data.namee,
                email: data.email,
            })
        if (insertError) {
            console.error("Error creando usuario:", insertError.message)
            return;
        }
            console.log(data)
    }
    
    return (
        <>
        <div className="p-2">
            <h3>Inicia Sesion</h3>
        </div>
        <form>
                <input
                    type="text"
                    name='nombre'
                    placeholder='Sam Wilson'
                    onChange={(e) => setData({ ...data, namee: e.target.value })}
                />
            <input 
            type="text"
            name='email'
            placeholder='youremail@site.com'
            onChange={(e) => setData({ ...data, email: e.target.value})}
            />
                <input
                    
                    type="password"
                    name='password'
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
            <button onClick={handleSubmit}>Enviar</button>
        </form>
        
        </>
    )
}