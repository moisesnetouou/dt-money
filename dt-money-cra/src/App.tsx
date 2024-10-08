import { useState } from "react";
import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }
  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
