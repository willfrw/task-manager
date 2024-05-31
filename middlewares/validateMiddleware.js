const Ajv = require('ajv');

const ajv = new Ajv();

const taskSchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        status: { type: 'sting', enum: ['em pendência', 'em progresso', 'completa'] },
        subTasks: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    title: {type: 'string' },
                    completed: { type: 'boolean' }
                },
                required: ['title']
            }
        }
    },
    required: ['title', 'status'],
    additionalProperties: false
};

const validateTask = (req, res, next) => {
    const validate = ajv.compile(taskSchema);
    const valid = validate(req.body);

    if (!valid) {
        return res.status(400).json({ errors: validate.errors });
    }

    next();
};

module.exports = validateTask;