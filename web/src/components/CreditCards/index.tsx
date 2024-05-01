import { EmptyCard, SectionCard } from '../SectionCard'

export default function CreditCards() {
    const cards = []

    return (
        <SectionCard 
            icon='ph ph-credit-card'
            text='meus'
            strongText='cartões'
        >
            {cards.length === 0 ? (
                <EmptyCard  
                    text='você não tem nenhum cartão cadastrado'
                    onClick={() => {}}
                />
            ) : (
                <ul>
                    <li>Picpay</li>
                </ul>
            )}
            
        </SectionCard>
    )
}