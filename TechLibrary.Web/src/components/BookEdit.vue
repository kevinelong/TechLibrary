<template>
    <div v-if="book">
        <h1>Edit Book</h1>
        <form @submit="checkForm">
            <b-card :title="book.title"
                    :img-src="book.thumbnailUrl"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 30rem;"
                    class="mb-2">
                <b-card-text>
                    <input :value="book.title" />
                    <textarea v-model="book.descr" ></textarea>
                </b-card-text>

                <b-link :to="{ name: 'book', params: { 'id' : book.bookId } }">Cancel</b-link>

                <input type="submit" />

            </b-card>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'BookEdit',
        props: ["id"],
        data: () => ({
            book: null,
            errors:[]
        }),
        methods: {
            save() {
                console.log(this);
            },
            checkForm: function (e) {
                 axios({
                    method: 'post',
                    url: 'http://localhost:5001/books/save',
                     data: {
                        "book": this.book
                     },
                        headers: {
                     }

                })
                .then(function (response) {
                    console.log(response);
                    this.book = response.data;

                })
                .catch(function (error) {
                    console.log(error);
                });
                //return true;
            
                e.preventDefault();
            },
        },
        mounted() {
            axios.get(`https://localhost:5001/books/${this.id}`)
                .then(response => {
                    console.log(this);
                    this.book = response.data;
                });
        }
    }
</script>