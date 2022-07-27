<template>
 <div>
    <!-- birşey girildiği an methods çalışsın -->
    <input type="text" placeholder="Custom input!" @input="handleChange" />
  </div>
</template>

<script>
  export default {
      methods: {
          handleChange (event) {
            // input ile girilen veriyi target üzerinden oku, ana component'e büyük harf dönüşümü yapılmış olarak  gönder
            // $emit içerisinde ilk değer gönderim değişkeni,ikincisi ise gönderilecek veri
              this.$emit("customChange", event.target.value.toUpperCase())
          }
      }
  }
</script>