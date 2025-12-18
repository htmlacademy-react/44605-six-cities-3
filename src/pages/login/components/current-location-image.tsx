export default function CurrentLocationImage(): JSX.Element {
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
          {/* <span>Amsterdam</span> Нужно будет получать через props */}
        </a>
      </div>
    </section>
  );
}
