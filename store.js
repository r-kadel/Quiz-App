//First create the STORE for questions and answers

const STORE = [
    { // Q 1
      question: "What is the largest organ in the human body?",
      answers: [
          'Brain',
          'Kidney',
          'Skin',
          'Liver'
      ],
      correctAns: 'Skin',
      image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/4/40/PM-169.png/revision/latest?cb=20170405054457',
      imageAlt: 'Skin suit'
    },

    { // Q 2
        question: 'What two organs make up the central nervous system?',
        answers: [
            'Lungs and Brain',
            'Brain and Spinal Cord',
            'Kidney and Liver',
            'Intestines and Stomach'
        ],
        correctAns: 'Brain and Spinal Cord',
        image: 'img/BrainSpinalCordlabld.jpg',
        imageAlt: 'Brain and spinal cord'
    },

    { // Q 3
        question: 'Which part of the circulatory system carries oxygenated blood?',
        answers: [
            'Arteries',
            'Capillaries',
            'Arterioles',
         'Veins'
        ],
        correctAns: 'Veins',
        image: 'img/4-blood.jpg',
        imageAlt: 'Blood cells'
    },

    { // Q 4
        question: 'Which of the following is the “powerhouse” of the cell?',
        answers: [
            'Nucleus',
            'Mitochondria',
            'Cell Membrane',
            'Ribosomes'
        ],
        correctAns: 'Mitochondria',
        image: 'img/palp.jpg',
        imageAlt: 'Unlimited power'
    },

    { // Q 5
        question: 'Which of these body systems primarily regulate sleep patterns?',
        answers: [
            'Circulatory System',
            'Digestive System',
            'Reproductive System',
            'Endocrine System'
        ],
        correctAns: 'Endocrine System',
        image: 'img/022018_sleep_work_stress.jpg',
        imageAlt: 'Sleeping on the job'
    },

    { // Q 6
        question: 'What is the largest bone in the body?',
        answers: [
            'Skull',
            'Humerus',
            'Foramen Magnum',
            'Femur'
        ],
        correctAns: 'Femur',
        image: 'img/dog-and-bone.jpg',
        imageAlt: 'A large bone'
    },

    { // Q 7
        question: 'All of these are natural receptors in your body EXCEPT:',
        answers: [
            'Nicotinic',
            'Muscarinic',
            'Cannabinoid',
            'Benzodiazepine'
        ],
        correctAns: 'Benzodiazepine',
        image: 'img/brainslug.jpg',
        imageAlt: 'Brain Drain'
    },

    { // Q 8
        question: 'Approximately 75 - 80 percent of your body is made up of this liquid:',
        answers: [
            'Blood',
            'Cerebral Spinal Fluid',
            'Alcohol',
            'Water'
        ],
        correctAns: 'Water',
        image: 'img/budlight.jpg',
        imageAlt: 'Water'
    },

    { // Q 9
        question: 'None of these are vital for your brain to function EXCEPT:',
        answers: [
            'A healthy relationship with friends and family',
            'Caffeine',
            'Sunlight',
            'Oxygen'
        ],
        correctAns: 'Oxygen',
        image: 'img/oxygen-483628539-350x350.jpg',
        imageAlt: 'Chemical image of O2'
    },

    { // Q 10
        question: 'How many hemispheres make up the human brain?',
        answers: [
            '2',
            '4',
            'none',
            '3'
        ],
        correctAns: '2',
        image: 'img/brain.jpeg',
        imageAlt: 'Big Brain'
    }
]
