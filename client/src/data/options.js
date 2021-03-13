import genres from './genres';

const options = genres.genres.map((state) => ({
  key: state.id,
  text: state.name,
  value: state.name,
  style: { color: 'teal' },
}
));

export default options;
