$(function() {

    const List = require('list.js')

    const id = 'p3x-gitlist-index'

    if ($(`#${id}`).length) {

        const paging = parseInt(window.gitlist.repoPaging)

        const Cookies = require('js-cookie');

        const cookieName = 'p3x-gitlist-query-repo';
        const value = Cookies.get(cookieName)
        const input = $('[name="query-repo"]')
        const inputClear = $('#p3x-gitlist-index-list-clear');


        const moment = require('moment')
        const times = $('.p3x-gitlist-index-repo-last-commit > .p3x-gitlist-index-repo-last-commit-time')
        const timesContainer = $('.p3x-gitlist-index-repo-last-commit')
        const timesContainerEmpty = $('.p3x-gitlist-index-repo-last-commit-empty')
        for(let timeindex in times) {
            const time = times[timeindex]
            if (String(time.innerText).trim() === '') {
                $(timesContainer[timeindex]).hide();
                $(timesContainerEmpty[timeindex]).show();
            } else {
                const timeMoment = moment(time.innerText).fromNow()
                time.innerText = timeMoment
            }
        }

        input.keypress(() => {
            Cookies.set(cookieName, input.val(), window.gitlist.cookieSettings)
        })
        input.change(() => {
            Cookies.set(cookieName, input.val(), window.gitlist.cookieSettings)
        })
        input.keydown(() => {
            Cookies.set(cookieName, input.val(), window.gitlist.cookieSettings)
        })
        input.keydown(() => {
            Cookies.set(cookieName, input.val(), window.gitlist.cookieSettings)
        })
        input.val(value);

        const listOptions = {
            valueNames: ['p3x-gitlist-index-name', 'p3x-gitlist-index-description', 'p3x-gitlist-index-repo-last-commit', 'p3x-gitlist-index-repo-last-commit-timestamp'],
            indexAsync: true,
//            sortClass: 'p3x-gitlist-index-sort',
        };

        if (paging !== 0) {
            listOptions.page = paging
            listOptions.pagination =  [{
                name: "p3x-gitlist-index-pagination-top",
                paginationClass: "p3x-gitlist-index-pagination-top",
                outerWindow: 2
            }, {
                paginationClass: "p3x-gitlist-index-pagination-bottom",
                innerWindow: 3,
                left: 2,
                right: 4
            }]
        } else {
            $('.p3x-gitlist-index-pagination-container').hide()
        }

        const list = new List(id, listOptions);
        if (value !== undefined) {
            list.search(value);
        }

        const inputSortOrder = $('#p3x-gitlist-index-list-sort-order')
        const inputSortSelect = $('#p3x-gitlist-index-list-sort-select')
        const cookieNameSortSelect = 'p3x-gitlist-repo-sort-select';
        const cookieNameSortOrder = 'p3x-gitlist-repo-sort-order';
        let settingSortSelect = Cookies.get(cookieNameSortSelect)
        let settingSortOrder = Cookies.get(cookieNameSortOrder)

        if (settingSortSelect === undefined) {
            settingSortSelect = 'p3x-gitlist-index-repo-last-commit-timestamp'
        }
        if (settingSortOrder === undefined) {
            settingSortOrder = 'desc'
        }

        const sort = () => {
            list.sort(settingSortSelect, {
                order: settingSortOrder
            })
            Cookies.set(cookieNameSortSelect, settingSortSelect, window.gitlist.cookieSettings)
            Cookies.set(cookieNameSortOrder, settingSortOrder, window.gitlist.cookieSettings)
        }

        const setInputSortOrder = () => {
            if (settingSortOrder === 'desc') {
                inputSortOrder.append(`<i class="fas fa-sort-amount-up"></i>`)
            } else {
                inputSortOrder.append(`<i class="fas fa-sort-amount-down"></i>`)
            }
        }

        inputSortSelect.val(settingSortSelect)

        sort()
        setInputSortOrder()
        //setInputSortSelect()

        inputSortSelect.on('change', () => {
            settingSortSelect = inputSortSelect.val()
            sort()
        })

        inputSortOrder.on('click', () => {
            inputSortOrder.empty()
            settingSortOrder = settingSortOrder === 'asc' ? 'desc' : 'asc'
            setInputSortOrder()
            sort()
        })

        // p3x-gitlist-index-name
        inputClear.on('click', () => {
            Cookies.remove(cookieName);
            input.val('');
            list.search('')
        })

    }
})
