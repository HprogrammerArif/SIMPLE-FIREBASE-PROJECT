/**
 *       ----------
 *      INITIAL SETUP
 *     ----------------
 * 
 * 1. visit: console.firebase.google.com
 * 2: create a project (skip google analytics)
 * 3: register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: do not publish or make firebase config to punlic by pushing those to github
 * 
 *     --------
 *    INTREGRATION
 *   ----------------
 * 
 * 7. Visit: go to doc> build> authentication > web > get started .
 * 8. export app from the firebase.config.js file: export default app.
 * 9: Login.jsx: import getAuth from firebase/auth
 * 10. Create: const auth = getAuth(app)
 * 
 *    -------------------
 *    PROVIDER SETUP
 *    ---------------------
 * 
 * 11. Import google auth provider and create a new provider
 * 12. Use signInWithPopUp and pass auth and provider
 * 13. Activate signin method (google, facebook, github etc)
 * 14. [vite]: change 127.0.0.1 to localhost
 * 
 */