import { useForm } from "react-hook-form";
import { useState } from "react";

function Form() {
    const { register, formState: { errors },  handleSubmit } = useForm();

    const [nameVal, setNameVal] = useState("");
    const [typeVal, setTypeVal] = useState("");

    const onNameInput = (e) => setNameVal(e.target.value);
    const onTypeInput = (ev) => setTypeVal(ev.target.value);

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <section className="form-section">
            <div className="container  center">
                <div className="form-container">
                    <h2>New pokemon</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Name</label>
                            <input type="text" value={nameVal} onInput={onNameInput} {...register('name', {required: true, maxLength:15})} />
                            <div className="error-message">
                                {errors.name?.type === 'required' && <p>The field name is required</p>}
                                {errors.name?.type === 'maxLength' && <p>This field should have less than 15 characters</p>}
                            </div>
                        </div>
                        <div>
                            <label>Type</label>
                            <input type="text" value={typeVal} onInput={onTypeInput} {...register('type', {required: true})} />
                            <div className="error-message"> 
                                {errors.type?.type === 'required' && <p>The field type is required</p>}
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Submit" disabled={!(nameVal && typeVal)}/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form;