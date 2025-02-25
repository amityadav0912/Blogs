import { useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import service from "../appWriteService/config";
import { Container, PostForm } from "../components";


export default function EditPost(){
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setPost(post);
                }
            })
        }else {
            navigate("/")
        }
    }, [slug, navigate])


    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ): null;
}