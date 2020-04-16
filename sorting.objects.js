function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function partition(arr, ind, low, high) {
    pivot = arr[high];
    i = low - 1;
    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
            swap(ind, i, j)
        }
    }
    i++;
    swap(arr, i, j);
    swap(ind, i, j)
    return i;
}

function quickSort(arr, ind, low, high) {
    if (low < high) {
        let index = partition(arr, ind, low, high - 1);
        quickSort(arr, ind, low, index - 1);
        quickSort(arr, ind, index + 1, high);
    }
}

var Employee = [{
        "name": "John",
        "Id": 3890,
        "role": "Developer"
    },
    {
        "name": "Alex",
        "Id": 2132,
        "role": "Manager"
    },
    {
        "name": "Ana",
        "Id": 8976,
        "role": "Developer"
    },
    {
        "name": "Sara",
        "Id": 6541,
        "role": "Analyst"
    },
    {
        "name": "David",
        "Id": 1122,
        "role": "Tester"
    },

]

var names = []
for (a of Employee) {
    names.push(a.name.toLowerCase())
}
var len= names.length;
var indexes = [...Array(len).keys()]


quickSort(names, indexes, 0, n - 1)

var sorted = [];
for (i of indexes) {
    sorted.push(Employee[i])
}

console.log(sorted)
