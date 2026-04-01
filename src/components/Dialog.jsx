import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 10px 16px;
  background: #e53935;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const StyledDialog = styled.dialog`
  border: none;
  border-radius: 12px;
  padding: 0;
  width: 400px;
  max-width: 90%;
  border: 1px solid #333;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #222;
`;

const Title = styled.h1`
  font-size: 18px;
  letter-spacing: 0.6px;
  margin: 0;
  color: #ccc;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Body = styled.p`
  padding: 16px;
  margin: 0;
  color: #777;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px;
  border-top: 1px solid #222;
`;

const ActionButton = styled.button`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &[value='cancel'] {
    background: #aa;
  }

  &[value='delete'] {
    background: #e53935;
    color: white;
  }
`;

export default function ConfirmDialog() {
  return (
    <>
      <Container>
        <StyledButton commandfor="confirm-dialog" command="show-modal">
          Open Modal
        </StyledButton>
      </Container>

      <StyledDialog id="confirm-dialog">
        <Header>
          <Title>Hello There?</Title>
          <IconButton
            commandfor="confirm-dialog"
            command="close"
            aria-label="Close"
            value="close"
          >
            ✕
          </IconButton>
        </Header>

        <Body>This is a dialog with Invoker commands. </Body>

        <Footer>
          <ActionButton
            commandfor="confirm-dialog"
            command="close"
            value="cancel"
          >
            Ok
          </ActionButton>
          <ActionButton
            commandfor="confirm-dialog"
            command="close"
            value="delete"
          >
            Close
          </ActionButton>
        </Footer>
      </StyledDialog>
    </>
  );
}
