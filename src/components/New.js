import Form from "./Form";
import { Helmet } from 'react-helmet';

function New(){
    return(
    <>
    <Helmet>
        <title>New pokemon</title>
    </Helmet>
    <Form />
    </>
    )
}

export default New;