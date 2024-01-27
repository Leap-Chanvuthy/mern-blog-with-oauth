import { Link , useNavigate } from "react-router-dom";
import { Label , TextInput , Button, Alert, Spinner } from "flowbite-react";
import { useState } from "react";

const SignIn = () => {
    const [formData , setFormData] = useState({});
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({...formData ,[e.target.id] : e.target.value.trim()});   
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.email || !formData.password){
          return setError('Please fill out all the fields');
      }
      try {
          setLoading(true);
          setError(null);
          const res = await fetch('/api/auth/signin' , {
              method : 'POST',
              headers : {'Content-Type' : 'application/json'},
              body : JSON.stringify(formData)
          })
          const data = await res.json();
          console.log(data);
          if(data.success === false){
              setLoading(false);
              return setError(data.message);
          }
          setLoading(false);
          if(res.ok){
              navigate('/');
          }
      }
      catch (error){
          setError(error.message);
          setLoading(false);
      }
  }


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
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <Label value="Email" />
                            <TextInput 
                                placeholder="leapchanvuthy@demo.com"
                                type="email"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value="Password" />
                            <TextInput 
                                placeholder="please enter a strong password"
                                type="password"
                                id="password"
                                onChange={handleChange}
                            />
                        </div>
                        <Button className="bg-gray-800"  type="submit" disabled={loading} >
                            {loading ? (
                            <>
                            <Spinner size='sm' />
                            <span className="pl-3" >Loading....</span>
                            </>
                            ) : 'Sign In'}
                        </Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Don't Have an Account?</span>
                        <Link to='/sign-up' className="text-blue-500">Sign In</Link>
                    </div>
                    {error && (
                        <Alert className="mt-5" color='failure' >
                            {error}
                        </Alert>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;