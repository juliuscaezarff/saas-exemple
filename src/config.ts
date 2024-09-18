export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: 'price_1PyFDaD0V3XqMk9unszrdeR2',
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: 'price_1PyFDpD0V3XqMk9uZMImsu5a',
        quota: {
          TASKS: 100,
        },
      },
    },
  },
}

// passando os tipos de plano para a plataforma