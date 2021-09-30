import firebase from '../firebaseConfig'

export default {
   async getUserProfile(userId, withImage = false){ 
       return new Promise(async (resolve, reject) => {
        firebase.firestore()
            .collection('user')
            .where("user_id", "==", userId)
            .onSnapshot(async querySnapshot =>{     
                let user = !querySnapshot.empty ? 
                        {
                            key: querySnapshot.docs[0].id,
                            ...querySnapshot.docs[0].data()
                        }: {};  
                if(withImage){
                    user.imagem = await this.getImagemPerfil(userId);
                }                                      
                resolve(user)
            });
       });        
    },    
    async getImagemPerfil (userId){
        return new Promise((resolve, reject) => {
            let ref = firebase
                .storage()
                .ref()
                .child("user/"+userId+'/perfil');

            ref.getDownloadURL().then(async (url) => {
                const response = await fetch (url);            
                let blob = await response.blob();
                const fileReaderInstance = new FileReader();
                fileReaderInstance.readAsDataURL(blob);
                fileReaderInstance.onload = () => {
                    let base64 = fileReaderInstance.result;
                    resolve(base64);       
                }            
            }).catch(erro => {
                resolve('')
            });
        })
    },
    logout(calback) {
        firebase.auth().signOut().then(() => {
            if(callback) calback();
          }).catch((error) => {
            alert('falha')
        });
    }   
}