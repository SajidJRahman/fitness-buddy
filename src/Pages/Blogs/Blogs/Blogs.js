import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-questions'>
            <div className='blogs-card'>
                <h5>Differences between Authentication & Authorization</h5>
                <p>Authentication simply means verifying someone's identity. On the other hand Authorization means authorizing or permitting access of data. For example, when we try to sign in to Google, GitHub or Twitter, these platforms first verifies if we are valid user, if we've been a user before etc. While for authorization, if we try to login or sign up from other websites using the 'Continue with Google, GitHub or Twitter' button, the login screen simply ask us if we're agree to login, if we're agree to share our names, pictures & other information. Choosing to agree means we're authorizing website to collect our data. Authentication is the first step to identify, while authorization takes place after authentication.</p>
            </div>
            <div className='blogs-card'>
                <h5>Why am I using Firebase? What other options do I have to implement authentication?</h5>
                <p>Firebase helps me build and run successful apps. It is an application development platform that allows me to create iOS, Android, and Web apps. I mainly use Firebase because it is provided by Google, and I trust Google for their security & privacy. Firebase is very simple & easy to use, all the to-dos are already on the website documentation. Firebase allows me to implement web authentication methods like Email-Password, GitHub, Twitter, Apple, Facebook, Microsoft etc. With some easy steps & with the help of documentation, I can easily implement any of these auth providers. Because of the simplicity of Firebase, I choose to use It.</p>
            </div>
            <div className='blogs-card'>
                <h5>What other services does Firebase provide other than Authentication?</h5>
                <p>Firebase Hosting, Firebase A/B Testing, Google Analytics, Firebase Cloud Messaging, Firebase Dynamic Links & Firebase Remote Config are some of the names of services that Firebase provide other than Authentication. Hosting is production-grade web content hosting. A/B Testing lets user optimize app experience. Google Analytics is an app measurement solution, that provides insight on app usage and user engagement. Cloud Messaging (FCM) is a messaging solution that lets user simply send messages. Dynamic Links are links that work as the user want. Remote Config is a cloud service that lets user change the behavior and appearance of user's app.</p>
            </div>
        </div>
    );
};

export default Blogs;