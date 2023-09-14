export const setJWT = jwt => sessionStorage.setItem('jwt', jwt );
export const getJWT = () => sessionStorage.getItem('jwt');