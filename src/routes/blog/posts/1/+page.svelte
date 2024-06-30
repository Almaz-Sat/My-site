<script>
  import { routes } from "../../routes.js";

  const url = window.location.pathname;
  const id = url.split("/").at(-1);
  const post = routes.find((e) => {
    return e.id === Number(id);
  });
  const { title } = post;
</script>

<h1>{title}</h1>

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis labore
  molestiae doloribus facere laudantium rerum. Libero sint quia voluptatum,
  ullam labore molestiae quo tenetur veniam fugiat, ea beatae asperiores omnis
  at quidem obcaecati, molestias nam. Minus ipsam, laboriosam maiores ratione ut
  molestiae modi commodi esse reiciendis quos quae mollitia deleniti? Voluptate,
  quos. Dolores dolor fugit explicabo facilis, maiores culpa eligendi reiciendis
  laborum dignissimos, placeat, rem ab ex obcaecati! Mollitia fugit cupiditate
  id dolorem recusandae hic aliquam ipsam quibusdam ea qui aperiam, doloribus
  minus, impedit excepturi natus. Neque asperiores inventore adipisci delectus
  quas eveniet quibusdam veniam voluptates ab unde perferendis, minus
  consequatur accusamus id velit ex quisquam harum est quis qui exercitationem
  modi voluptas recusandae. Facilis assumenda quasi non pariatur, minus fugiat
  rem, praesentium consectetur eligendi veniam consequuntur dolores provident
  dolorum exercitationem tempore nulla asperiores. Repudiandae mollitia officia
  aut voluptas. Voluptatem illo autem sunt ipsa nihil, dolor aliquid non vel
  quia expedita voluptas, harum nesciunt ad illum atque. Laborum corrupti aut,
  quisquam cumque illum reiciendis ducimus suscipit amet blanditiis ipsum sit
  beatae qui tenetur ipsa magnam temporibus totam, incidunt tempore saepe esse
  ad sint est. Praesentium deserunt, ipsa repudiandae esse, magnam, id dolores
  repellat ullam molestiae dicta commodi. Sunt, in totam!
</p>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis labore
  molestiae doloribus facere laudantium rerum. Libero sint quia voluptatum,
  ullam labore molestiae quo tenetur veniam fugiat, ea beatae asperiores omnis
  at quidem obcaecati, molestias nam. Minus ipsam, laboriosam maiores ratione ut
  molestiae modi commodi esse reiciendis quos quae mollitia deleniti? Voluptate,
  quos. Dolores dolor fugit explicabo facilis, maiores culpa eligendi reiciendis
  laborum dignissimos, placeat, rem ab ex obcaecati! Mollitia fugit cupiditate
  id dolorem recusandae hic aliquam ipsam quibusdam ea qui aperiam, doloribus
  minus, impedit excepturi natus. Neque asperiores inventore adipisci delectus
  quas eveniet quibusdam veniam voluptates ab unde perferendis, minus
  consequatur accusamus id velit ex quisquam harum est quis qui exercitationem
  modi voluptas recusandae. Facilis assumenda quasi non pariatur, minus fugiat
  rem, praesentium consectetur eligendi veniam consequuntur dolores provident
  dolorum exercitationem tempore nulla asperiores. Repudiandae mollitia officia
  aut voluptas. Voluptatem illo autem sunt ipsa nihil, dolor aliquid non vel
  quia expedita voluptas, harum nesciunt ad illum atque. Laborum corrupti aut,
  quisquam cumque illum reiciendis ducimus suscipit amet blanditiis ipsum sit
  beatae qui tenetur ipsa magnam temporibus totam, incidunt tempore saepe esse
  ad sint est. Praesentium deserunt, ipsa repudiandae esse, magnam, id dolores
  repellat ullam molestiae dicta commodi. Sunt, in totam!
</p>
