import { Container, Paper, TextField } from "@mui/material";
import Contact from "./Contact";
const ContactList = ({
  contactsArr,
  deleteContact,
  searchContact,
  searchTerm,
  searchKeyword,
}) => {
  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: 1, marginBottom: 5 }}>
        <Paper sx={{ padding: "1em 3em" }}>
          <TextField
            /* inputRef={inputElem} */ value={searchTerm}
            onChange={(e) => searchKeyword(e)}
            id="outlined-basic"
            label="Search Contact"
            variant="outlined"
            fullWidth
          />
          <Contact contactsArr={contactsArr} deleteContact={deleteContact} />
        </Paper>
      </Container>
    </>
  );
};

export default ContactList;
