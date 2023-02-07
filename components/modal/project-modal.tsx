import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Modal from "react-bootstrap/Modal";

import { IProjects } from "../projects/projects.data";

import { useGlobalModalContext } from "./globalModal.component";
import { CardDescription, CardImage, CardStack, CardStackItem, ModalBody, ModalButton } from "./project-modal.style";

const ProjectModal: React.FC<IProjects> = ({
  imageUrl,
  description,
  link,
  stack,
}: {
  imageUrl: string;
  description: string;
  stack: string[];
  link: string;
}) => {
  const { hideModal, store } = useGlobalModalContext();

  return (
    <Modal
      show={true}
      animation={true}
      backdrop={true}
      size="xl"
      centered
      className="modal show fade"
    >
      <CardImage src={imageUrl} alt="Q4" />
      <ModalBody>
        <CardDescription>
          {description}
        </CardDescription>
        <CardStack>
          <h3>Stack Technologiczny</h3>
          {stack.map((tech: string, idx: number) => (
            <CardStackItem key={idx}>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ marginRight: "10px" }}
                className="cr-primary-bittersweet"
              />
              {tech}
            </CardStackItem>
          ))}
        </CardStack>
      </ModalBody>

      <Modal.Footer>
        <p style={{marginRight: "auto"}}>Link do strony -&gt;  <a href={link} rel="noreferrer" target="_blank" style={{color: '#5839f6'}}>{link}</a> </p>
        <ModalButton className="btn btn-block p-2 shadow rounded-pill" onClick={hideModal} >Zamknij</ModalButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;