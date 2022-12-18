export function abled(tologup, tologin, errors, foradmin){
    if(tologin || foradmin){
        for (let prop in errors){
            if(errors[prop]) {
                if(prop!=='t')return true
            }
        }
        return false
    }
    else if(tologup){
        for (let prop in errors){
            if(errors[prop]) return true
        }
        return false
    }
}