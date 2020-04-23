// array of 4 trees listed

const trees = ['oak','Pine','aspen','Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// displayResults.textContent =  'Testing here right now'
// error.textContent = 'Testing here right now'

//display list of trees inside the displayResults div

const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span> ${trees.length} elements long</span>`
}

listTrees()

//add redwood to end

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

//add pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear')
    listTrees()
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the first tree because there are no trees.'
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the second tree because there is only one tree.'
    }
}

document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the last tree because there no more trees.'
    }
}

document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 1) {
        trees.sort()
        listTrees()
    } else {
        errorElement.textContent = 'I cannot sort the trees because there is only one tree.'
    }
}

document.querySelector('#lowerTrees').onclick = () => {
    if (trees.length > -1) {
        for (let i = 0; i < trees.length; i++) {
             trees[i] = trees[i].toLowerCase();
             listTrees()
        }
    } else {
        errorElement.textContent = 'I cannot make zero trees lowercase.'
    }
}

document.querySelector('#showName3').onclick = () => {
    if (trees.length >= 3) {
        displayResults.textContent = trees[2]
    } else {
        errorElement.textContent = 'I cannot display the third tree because there are no more than two trees.'
    }
}

document.querySelector('#showName4').onclick = () => {
    if (trees.length >= 4) {
        displayResults.textContent = trees[3]
    } else {
        errorElement.textContent = 'I cannot display the fourth tree because there are no more than three trees.'
    }
}
