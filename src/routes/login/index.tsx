import { createFileRoute } from '@tanstack/react-router'
import { supabase } from '../../supabase/client'
import React, { useState } from 'react'

export const Route = createFileRoute('/login/')({
    component: Index,
})



function Index() {
    interface Data{
        email: string ;
        password: string ;
    }
    const [data, setData] = useState<Data>({
        email: "",
        password: ""
    });
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await supabase.auth.signUp({
            email: data.email,
            password: data.password,
        })
        await supabase
            .from('profiles')
            .insert({
                email: data.email,
                password: data.password,
            })

    }
    return (
        <>
        <div className="p-2">
            <h3>Inicia Sesion</h3>
        </div>
        <form>
                <input
                    type="text"
                    name='email'
                    placeholder='youremail@site.com'
                    onChange={(e) => setData({ ...data, email: e.target.value })}
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