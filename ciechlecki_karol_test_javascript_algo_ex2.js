function verifyRow(row) {
    let verified = true;
    // Convert everything into an int to avoid problems..
    for (let i = 0; i < row.length; i++) {
        row[i] = parseInt(row[i]);
    }

    /* Find out if any numbers are not in the 0-9 range
     This could be faster if we just sorted the array and checked 
     for the first and last element, however i would think that
     sorting the array makes it slower in our case as we know that the number
     set that we recieve will be relatively small. */
    for (let i = 0; i < row.length; i++) {
        if (row[i] < 0 || row[i] > 9)
            return false;
    }

    /* Check for non-unique elements
       Doing it by converting everything into a hash set, as this results in O(n) complexity,
       this is a lot faster than using a brute-force approach O(n^2) */
    let hash_set = new Set();
    for (let i = 0; i < row.length; i++) {
        if (hash_set.has(row[i]))
            return false;
        hash_set.add(row[i]);
    }
    return true;
}
