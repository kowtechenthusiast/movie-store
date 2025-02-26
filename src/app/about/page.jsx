import "./about.css";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className="about-content">
      <h1 className="about-title">About Movie Store</h1>
      <div className="about-text">
        <p>
          Welcome to Movie Store! This app is designed to provide users with a
          comprehensive database of movies, TV shows, and entertainment content.
          Our goal is to offer a seamless and enjoyable experience for movie
          enthusiasts and casual viewers alike.
        </p>

        <p>
          On Movie Store, you'll find detailed information about your favorite
          movies and TV shows, including cast and crew details, plot summaries,
          user reviews, and ratings. We strive to keep our database up-to-date
          with the latest releases and trending content.
        </p>

        <p className="clerk-link">
          This website is created using Next.js and{" "}
          <a href="https://go.clerk.com/fgJHKlt" target="_blank">
            Clerk
          </a>
          .
        </p>

        <p>
          We encourage you to rate and review the movies and shows you watch.
          Your feedback helps other users discover great content and enhances
          the overall community experience. Join us in celebrating the world of
          entertainment!
        </p>
      </div>
    </div>
  );
}
