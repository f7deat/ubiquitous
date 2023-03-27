export default function useIntl() {
    return localStorage.getItem('lang') || 'en-US';
}