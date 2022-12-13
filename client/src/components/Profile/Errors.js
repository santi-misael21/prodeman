export function verifName(s){
    if(!s.length) return 'Ingresar nombre';
    if(s.length>24) return 'Máximo 24 caracteres';
    return false
}

export function verifPass(p){
    if(!p.length) return 'Ingresar contraseña';
    if(p.length<6) return 'Mínimo 6 caracteres';
    if(p.length>24) return 'Máximo 24 caracteres';
    return false
}
