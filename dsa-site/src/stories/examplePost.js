const post = {
  author: "An Author",
  title: "Title of the Thing",
  body: `
  t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
  praesentium voluptatum deleniti atque corrupti quos dolores et quas
  molestias excepturi sint occaecati cupiditate {pic1}non provident,
  similique sun-{pic1}-t in culpa qui officia deserunt mollitia animi, id est
  ii *laborum* et dolorum i fuga. Et harum quidem rerum facilis est
  et expedita distinctio. Nam libero tempore, cum soluta nobis est
  eligendi optio cumque nihil impedit quo minus id quod maxime placeat
  facere possimus, omnis voluptas assumenda est,
  omnis dolor repellendus. -{pic2}-Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellatAr
  `,
  excerpt: "t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi ",
  tags: ['some', 'tags'],
  date: '2017-05-27',
  thumbUrl: "http://lorempixel.com/150/150/nature",
  assets: {
    pic2: {
      url: 'http://lorempixel.com/400/200/nature',
      alt: 'A nature picture',
    },
    pic1: {
      url: 'http://lorempixel.com/100/75/nature',
      alt: 'A nature picture',
      className: 'block caption',
      inline: true,
    }
  }
}

export default post;
