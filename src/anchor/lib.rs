use anchor_lang::prelude::*;

declare_id!("AProoUZhgBATtU3nq66FDkwBJFq2JyYnSdvKwqFHxJTZ");

#[program]
pub mod solana_store {
    use super::*;

    // Set the value for a given address
    pub fn set_value(ctx: Context<SetValue>, addr: String, value: String) -> Result<()> {
        let store_account = &mut ctx.accounts.store_account;

        // Check if the address already exists; update if it does
        if let Some(existing) = store_account
            .values
            .iter_mut()
            .find(|entry| entry.key == addr)
        {
            existing.value = value;
        } else {
            // Otherwise, add the new key-value pair
            store_account.values.push(KeyValue { key: addr, value });
        }
        Ok(())
    }

    // Get the value for a given address
    pub fn get_value(ctx: Context<GetValue>, addr: String) -> Result<Option<String>> {
        let store_account = &ctx.accounts.store_account;

        // Find the value corresponding to the address
        if let Some(entry) = store_account.values.iter().find(|entry| entry.key == addr) {
            Ok(Some(entry.value.clone()))
        } else {
            Ok(None)
        }
    }

    // Initialize the store account (set up the values vector)
    pub fn initialize(ctx: Context<InitializeStoreAccount>) -> Result<()> {
        let store_account = &mut ctx.accounts.store_account;
        store_account.values = Vec::new(); // Initialize as an empty vector
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SetValue<'info> {
    #[account(mut)] // Ensure the store_account is owned by the user
    pub store_account: Account<'info, StoreAccount>,
    pub user: Signer<'info>,  // The user signing the transaction is responsible for paying the fee
}

#[derive(Accounts)]
pub struct GetValue<'info> {
    #[account(mut)] // Ensure the store_account is owned by the user
    pub store_account: Account<'info, StoreAccount>,
    pub user: Signer<'info>,  // The user signing the transaction is responsible for paying the fee
}

#[derive(Accounts)]
pub struct InitializeStoreAccount<'info> {
    #[account(
        init, 
        payer = user, 
        space = 8 + 2400 // Space for StoreAccount data
    )]
    pub store_account: Account<'info, StoreAccount>,
    #[account(mut)]
    pub user: Signer<'info>,  // User who pays the fee
    pub system_program: Program<'info, System>,  // The system program to handle account creation
}

#[account]
pub struct StoreAccount {
    pub values: Vec<KeyValue>,
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize, Debug)]
pub struct KeyValue {
    pub key: String,
    pub value: String,
}