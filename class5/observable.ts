function subscribe(observer) {
    let counter: number = 20;
    observer.next(1);
    observer.next(2);
    observer.next(3);
    const interval = setInterval(() => {
        observer.next(counter);
        counter++;
    }, 1000);
    return {
        unsubscribe: () => clearInterval(interval)
    }
}

const subscription = subscribe({
    next: value => console.log(`next value es ${value}`),
    error: error => console.error(error),
    complete: () => console.log('complete')
});

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);