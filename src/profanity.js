import profanity from 'profanity-censor'

profanity.use(profanity.dictionary.concat(['fuck', 'Fuck']))

export default profanity
