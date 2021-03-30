<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <b-input v-on:keyup="load()" id="searchText" placeholder="Search Text" v-model="searchText" style="width:50%;display:inline-block;"/>
        <b-button v-on:click="pageNumber=1;load()" style="width:50%;display:inline-block;">Search</b-button>
        <div>Page {{pageNumber}} of {{pageCount}}.</div>
        <b-button v-on:click="previous()">Previous</b-button>
        <b-button v-on:click="next()">Next</b-button>
        <b-table striped hover :items="items" :fields="fields" responsive="sm">
            <template v-slot:cell(thumbnailUrl)="data">
                <b-img :src="data.value" thumbnail fluid></b-img>
            </template>
            <template v-slot:cell(title_link)="data">
                <b-link :to="{ name: 'book_view', params: { 'id' : data.item.bookId } }">{{ data.item.title }}</b-link>
            </template>
        </b-table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data: () => ({
         
            fields: [
                { key: 'thumbnailUrl', label: 'Book Image' },
                { key: 'title_link', label: 'Book Title', sortable: true, sortDirection: 'desc' },
                { key: 'isbn', label: 'ISBN', sortable: true, sortDirection: 'desc' },
                { key: 'descr', label: 'Description', sortable: true, sortDirection: 'desc' }

            ],
            items: [],
            pages: 1234,
            pageNumber: 1,
            pageSize:2,
            searchText: ''
        }),
        mounted() {
            this.load()
        },

        methods: {
            load() {
                axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                axios.get("https://localhost:5001/books", {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                    params: {
                        pageNumber: this.pageNumber,
                        pageSize: this.pageSize,
                        searchText: this.searchText
                    }
                }).then(response => {
                    this.pageCount = response.data.pageCount;
                    this.pageNumber = response.data.pageNumber;
                    this.pageSize = response.data.pageSize;
                    this.items = response.data.bookResponse;
                });
            },
            dataContext(ctx, callback) {
                axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
                axios.get("https://localhost:5001/books", {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(response => {
                    callback(response.data.bookResponse);
                });
            },
            next() {
                this.pageNumber++;
                this.load();
            },
            previous() {
                this.pageNumber--;
                this.load();
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

