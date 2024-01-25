import { Link } from "react-router-dom";
import { Label , TextInput , Button } from "flowbite-react";

const SignIn = () => {
    return ( 
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                {/* left */}
                <div className="flex-1">
                <Link
                    to="/"
                    className="whitespace-nowrapfont-semibold dark:text-white text-4xl"
                >
                    <span className="px-2 py-1 bg-gray-800 to-pink-500 rounded-lg text-white">
                    Vuthy's
                    </span>
                    Blog
                </Link>
                <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore veniam similique voluptate doloribus aspernatur impedit minus, rem temporibus quam nulla? Sunt tempora veniam nemo doloribus. Repellendus ab maxime nihil. Sunt!</p>
                </div>
                {/* right */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div>
                            <Label value="Username" />
                            <TextInput 
                                placeholder="chanvuthyleap"
                                type="text"
                                id="username"
                            />
                        </div>
                        <div>
                            <Label value="Email" />
                            <TextInput 
                                placeholder="leapchanvuthy@demo.com"
                                type="email"
                                id="email"
                            />
                        </div>
                        <div>
                            <Label value="Password" />
                            <TextInput 
                                placeholder="please enter a strong password"
                                type="text"
                                id="password"
                            />
                        </div>
                        <Button className="bg-gray-800"  type="submit" >Sign Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account ?</span>
                        <Link to='/sign-up' className="text-blue-500">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;