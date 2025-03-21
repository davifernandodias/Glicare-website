import IDropdown from "../models/dropdown.interface"
import DropDown from "./ui/dropdown"

const questionsAbout: IDropdown[] = [
    {
        question: "O que é a diabetes?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 1
    }, {
        question: "Quais são os sintomas mais comuns da diabetes?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 2
    }, {
        question: "Quais as diferenças entre a diabetes tipo 1 e do tipo 2?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 3
    }, {
        question: "Como é feito o diagnóstico da diabetes?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 4
    }, {
        question: "A diabetes tem cura e pode ser evitada?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 5
    }, {
        question: "Como funciona o aplicativo Glicare?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 6
    }, {
        question: "Como meu médico acompanha meu prontuário?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 7
    }, {
        question: "Preciso ter cadastro para usar o Glicare?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 8
    }, {
        question: "O Glicare está disponível em quais aparelhos?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 9
    }, {
        question: "O Glicare é pago?",
        response: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsum autem tenetur tempore laborum dicta! Eos architecto sapiente aliquam fugiat minima eum iure accusantium, ratione, alias tempore ipsa obcaecati corporis! Vitae possimus porro dolorem saepe maxime sunt consectetur necessitatibus rerum distinctio ipsam nostrum suscipit ut natus at, veniam fugiat perferendis, cum odit. Pariatur cum commodi tenetur incidunt assumenda recusandae facilis? Deleniti ea esse, ipsa corrupti minus aut voluptas beatae libero unde magni accusamus dignissimos nam voluptates amet dolor dolores incidunt. Voluptates ad temporibus tempora ut explicabo dignissimos vero esse magnam.",
        id: 10
    },
]


export default function About() {
    return <section className="lg:px-20 pt-16">
        <div className="pl-6 pr-20 pb-9">
            <h1 className="font-medium text-2xl text-gray-dark pb-4">Sobre diabetes e o Glicare</h1>
            <p className="text-secondary-gray text-lg lg:pr-96 lg:mr-80">Ficou com dúvidas sobre diabetes, condições e o Glicare? Tire elas aqui.</p>
        </div>

        <div className="w-full px-6 flex flex-col gap-4 pb-16 lg:grid lg:grid-cols-2 lg:items-start">
            {questionsAbout.map(({ question, response, id }) => {
                return <DropDown key={id} title={question} description={response} background="white" />
            })}
        </div>
    </section>
}