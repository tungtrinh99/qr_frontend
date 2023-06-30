const formatFullname = (firstName: string | undefined, lastName: string | undefined): string => {
    return firstName + ' ' + lastName;
}

const formattedAmount = (amount: number): string => {
    return amount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
}

export {
    formatFullname,
    formattedAmount
}