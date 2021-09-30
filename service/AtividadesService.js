import firebase from '../firebaseConfig'
import UserService from './UserService'

export default {
    async loadAtividades(){
        return new Promise((resolver, reject) => {
            firebase
                .firestore()
                .collection("atividades")
                .orderBy("distancia", "desc")
                .onSnapshot(async querySnapshot =>{
                    const data = []
                        querySnapshot.forEach(doc =>{
                            data.push({
                                ...doc.data(),
                                key:doc.id
                        })
                    })

                    for (const atividade of data){
                        const profile = await UserService
                        .getUserProfile(atividade.user_id, true);
                        atividade.profile = profile;
                    }
                    resolver(data);
                })
        })
    }
}