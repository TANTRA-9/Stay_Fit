import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCV9obo1RTa6etMUrqjV8JHGKst0nqjvvE",
    authDomain: "stayfit-d84a1.firebaseapp.com",
    databaseURL: "https://stayfit-d84a1.firebaseio.com",
    projectId: "stayfit-d84a1",
    storageBucket: "stayfit-d84a1.appspot.com",
    messagingSenderId: "826859987775",
    appId: "1:826859987775:web:856dcbef736fff388f298a",
    measurementId: "G-4VQ9X4WE40"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;