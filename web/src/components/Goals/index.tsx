import { EmptyCard, SectionCard } from '../SectionCard'

export default function Goals() {
    const goals = []

    return (
        <SectionCard 
            icon='ph ph-medal'
            text='minhas'
            strongText='metas'
        >
            {goals.length === 0 ? (
                <EmptyCard  
                    text='você não tem nenhuma meta cadastrada'
                    onClick={() => {}}
                />
            ) : (
                <ul>
                    <li>Acer Nitro 5</li>
                </ul>
            )}
            
        </SectionCard>
    )
}