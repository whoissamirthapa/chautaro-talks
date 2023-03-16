import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import AuthorizedHomeBase from "../../../components/AuthorizedHomeBase/AuthorizedHomeBase";
import Input from "../../../components/utils/form/input";
import api from "../../../config.axios";
import classes from "./CreateMeet.module.css";

function CreateChautaroMeet() {
    const history = useHistory();

    const [createData, setCreateData] = useState({
        name: "",
        description: "",
    });
    const [loadingCreate, setLoadingCreate] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (createData.name.trim() === "") {
            alert("Group name is required");
            return;
        }
        if (createData.name.trim().length < 3) {
            alert("Group name should be at least 3 characters");
            return;
        }
        if (createData.name.trim().length > 20) {
            alert("Group name should be at most 20 characters");
            return;
        }
        if (createData.description.trim() === "") {
            alert("Group description is required");
            return;
        }
        if (createData.description.trim().length < 5) {
            alert("Group description should be at least 5 characters");
            return;
        }

        setLoadingCreate(true);
        const res = await api.post("/chautaro-group-talk/create", createData);
        if (res.data.success) {
            // console.log(res.data);
            alert("Group is created");
            history.push("/chautaro-meet/join-meet");
        } else {
            // console.log(res.data);
            alert(res.data.message);
        }
        setLoadingCreate(false);
    };

    return (
        <AuthorizedHomeBase>
            <article className={classes.meet_create_parent_container}>
                <header className={classes.header_meet_create}>
                    <span>Create Your Group</span>
                </header>

                <section className={classes.meet_form_container}>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type={"text"}
                            label="Group Name"
                            name="name"
                            value={createData.name}
                            placeholder="Your group name"
                            handleChange={handleChange}
                        />
                        <Input
                            type={"text"}
                            label="Group Description"
                            name="description"
                            value={createData.description}
                            placeholder="Your group description"
                            handleChange={handleChange}
                        />
                        <button disabled={loadingCreate}>
                            {loadingCreate ? "Creating..." : "Create"}
                        </button>
                    </form>
                    <span className={classes.join_other_group}>
                        Want to join other Group?
                        <Link to="/chautaro-meet/join-meet">Click Here</Link>
                    </span>
                </section>
            </article>
        </AuthorizedHomeBase>
    );
}

export default CreateChautaroMeet;
