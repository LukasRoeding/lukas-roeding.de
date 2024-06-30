import { createImage } from "../js/createImage.js";

export function level(height) {
    return {
        informations: [
            {
                id: 1,
                x: height / 2 - height / 5,
                y: height - height / 3,
                html:   "<p>In diesem Level findest du die wichtigsten Projekte an denen ich professionell mitgewirkt habe.</p>" + 
                        "<p>Jedes Projekt hat eine Infobox, welche Informationen über das Projekt, die benutzten Technologien und meinen Anteil an dem Projekt enthält.</p>",
                title: 'Berufserfahrung',
                link: ''
            },
            {
                id: 2,
                x: height / 2,
                y: height - height / 2,
                html: "<p>Das erste professionelle Projekt an dem ich gearbeitet habe.</p>" + 
                "<p>Das Ziel des Projekts war es, einen Shop in die bereits vorhandene Typo3 Seite von Murdotec zu integrieren.</p>" +
                "<p>Als Shopsystem wurde ein Headless Shopware genutzt. Die Benutzeroberfläche und Darstellung der Shopinformationen wurden mit Vue 2 entwickelt. Die Vue-Application wurde dann in die Shopseite eingehangen. Am Typo3 fanden keine direkten Entwicklungen statt.</p>" +
                "<p>Meine Aufgabe bestand primär darin, den Checkoutprozess und Accountbereich zu entwickeln. Anpassungen an den Produktdetailseiten wurden ebenfalls getätigt. Entwickelt wurde an dem Projekt primär Ende 2020 - Anfang 2021.</p>" +
                "<p>Technologien: Vue 2, Shopware, Typescript, Vuex</p>",
                title: 'Murdotec Onlineshop',
                link: 'https://murdotec.de/shop/category'
            },
            {
                id: 3,
                x: height + height / 8 - 2,
                y: height - height / 2,
                html: "<p>Das Projekt an dem ich am kürzesten gearbeitet habe. Unter anderem entwickelte Ich UI-Komponenten für das Adminbackend. Die UI-Komponenten wurden genutzt um die verschiedenen Druckmodi für den 3D-Druck zu konfigurieren.</p>" + 
                "<p>Zusätzlich konnte ich erste Erfahrungen in der Backend-Entwicklung sammeln, als ich Anpassungen an dem API-Gateway machte, um verschiedene Mikroservices miteinander zu verbinden.</p>" + 
                "<p>Technologien: Vue 2, Typescript, Vuex, Nest.js</p>",
                title: 'Murtfeldt Additive Solutions 3D-Druck',
                link: 'https://murtfeldt-as.de/'
            },
            {
                id: 4,
                x: height + height / 2 + height / 4 - 6,
                y: height - height / 2,
                html: "<p>Das größte Projekt an dem ich bisher mitwirken durfte. Die Website der Murtfeldt Kunststoffe GmbH & Co. KG sollte komplett neu programmiert werden. In dem Projekt arbeitete ich von August 2021 bis Mai 2023. Die Website ging im März 2023 live und generiert täglich neue leads für Murtfeldt</p>" +
                "<p>Die Website nutzt wie Murdotec ein Headless Shopware für die E-Commerce Logik. Zusätzlich dient ein Headless Typo3 als Content-Management-System. Die Daten der beiden Systeme werden mit Nuxt 2 dargestellt. Eine Suche wurde ebenfalls mithilfe von Elasticsearch integriert,</p>" + 
                "<p>Über die Jahre arbeitete ich an vielen Bereichen der Website. Ich erstellte den Großteil der UI-Komponenten und war für die Erweiterung des Typo3 zuständig. Ich kümmerte mich zusätzlich um die Darstellung der Produktdetailseiten.</p>" +
                "<p>Bis zum Livegang der neuen Seite, war ich mit der Pflege der alten Typo3 Seite beauftragt. Ich trat häufig in direkten Kundenkontakt und betreute diesen streckenweise alleine.</p>" +
                "<p>Technologien: Typo3, Shopware, Nuxt 2, Typescript, Vuex, Elasticsearch</p>",
                title: 'Neue Murtfeldt Website',
                link: 'https://murtfeldt.de/'
            },
            {
                id: 5,
                x: height * 2 + height / 4 + height / 8 - 8,
                y: height - height / 2,
                html: "<p>Ein etwas kleineres Projekt an dem ich gearbeitet habe. Das Projekt ist für mich besonders, da ich es fast komplett alleine umgesetzt habe.</p>" +
                "<p>Der Großteil der Seite wurde Sommer 2022, auf Basis der neuen Murtfeldt Seite, entwickelt. Die Murtfeldt-Group(Murtfeldt, Murdotec, Murtfeldt-AS, Crosslink, ...) hatte noch keine Seite.</p>" +
                "<p>Da die Seite ein Klon der Murtfeldt Seite ist, war das Grundgerüst schon gegeben. Es mussten primär nur neue UI-Komponenten entwickelt werden.</p>" +
                "<p>In dem Projekt lernte ich mich selbst zu organisieren.</p>" + 
                "<p>Technologien: Typo3, Nuxt 2, Typescript, Vuex</p>",
                title: 'Seite für die Murtfeldt-Group',
                link: 'https://murtfeldt-group.de/'
            }
        ],
        doors: [
            {
                x: 100,
                y: height - height / 5,
                target: 'back'
            },
            {
                x: height * 3.1,
                y: height - height / 5,
                target: '/education.html'
            },
        ],
        images: [              
            {
                id: 1,
                x: height / 2,
                y: height / 4.5,
                w: height / 2,
                h: height / 4,
                source: '../images/experience/murdotec_shop.png'
            },                
            {
                id: 2,
                x: height + height / 8 - 2,
                y: height / 4.5,
                w: height / 2,
                h: height / 4,
                source: '../images/experience/murtfeldt_as.jpeg'
            },                
            {
                id: 3,
                x: height + height / 2 + height / 4 - 4,
                y: height / 4.5,
                w: height / 2,
                h: height / 4,
                source: '../images/experience/murtfeldt_de.png'
            },   
            {
                id: 4,
                x: height * 2.375 - 6,
                y: height / 4.5,
                w: height / 2,
                h: height / 4,
                source: '../images/experience/murtfeldt_de.png'
            },   
            {
                id: 5,
                x: height * 2.375 - 6,
                y: height / 4.5,
                w: height / 2,
                h: height / 4,
                source: '../images/experience/murtfeldt_group.de.png'
            },
            {
                id: 6,
                x: height - height / 2.5,
                y: height - height / 10 - height / 20,
                w: height / 20,
                h: height / 20,
                source: '../images/shrooms.png'
            },  
            {
                id: 7,
                x: height * 1.25,
                y: height - height / 10 - height / 4,
                w: height / 5,
                h: height / 10,
                source: '../images/bush.png'
            },    
            {
                id: 8,
                x: height * 3.4,
                y: height - height / 2 - height / 10,
                w: height / 2,
                h: height / 2,
                source: '../images/tree.png'
            },    
            {
                id: 9,
                x: height * 2.25,
                y: height - height / 10 - height / 20,
                w: height / 20,
                h: height / 20,
                source: '../images/rock.png'
            },    
            {
                id: 10,
                x: height * 2.75,
                y: height - height / 25 - height / 4,
                w: height / 25,
                h: height / 25,
                source: '../images/skulls.png'
            },              
            {
                id: 15,
                x: height * 3.1,
                y: height - height / 4 - height / 10,
                w: height / 8,
                h: height / 10,
                source: '../images/education.png'
            },  
        ],
        backgroundImages: [
            {
                id: 1,
                x: -10,
                y: -2,
                w: height * 5,
                h: height + 2,
                source: '../images/back.png'
            },
        ],
        enemies: [
            {
                id: 0,
                x: height / 2 + 2,
                y: height - height / 4 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/snail_run_left.png'),
                        right: createImage('../images/enemies/snail_run_right.png')
                    }
                },
                range: {
                    leftX: height / 2,
                    rightX: height - height / 20,
                },
                speed: 10,
                spriteWidth: 38,
                spriteHeight: 24,
                spriteFrames: 9
            },
            {
                id: 1,
                x: height + 2,
                y: height - height / 10 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/snail_run_left.png'),
                        right: createImage('../images/enemies/snail_run_right.png')
                    }
                },
                range: {
                    leftX: height,
                    rightX: height * 2,
                },
                speed: 10,
                spriteWidth: 38,
                spriteHeight: 24,
                spriteFrames: 9
            },
            {
                id: 2,
                x: height * 2.375,
                y: height - height / 4 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/snail_run_left.png'),
                        right: createImage('../images/enemies/snail_run_right.png')
                    }
                },
                range: {
                    leftX: height * 2.375 - 6,
                    rightX: height * 2.875 - 6 - height / 20,
                },
                speed: 10,
                spriteWidth: 38,
                spriteHeight: 24,
                spriteFrames: 9
            }
        ],
        platforms: [        
            {
                id: 1,
                x: height / 2 - 2,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 2,
                x: height + height / 8 - 4,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 3,
                x: height + height / 2 + height / 4 - 6,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 4,
                x: height * 2 + height / 4 + height / 8 - 8,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 5,
                x: -1,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 6,
                x: height - 3,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 7,
                x: height * 2 - 6,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 8,
                x: height * 3 - 8,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            }
        ],
        blocks: []
    }
}