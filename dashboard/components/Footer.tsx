import useAuth from '../lib/hooks/use-auth'

export default function Footer() {
  const { token } = useAuth()

  return (
    <footer className="w-full text-center text-sm flex flex-col gap-2">
      <p>
        Construído com velocidade e privacidade em mente usando{' '}
        <a
          href="https://analytics-star.vercel.app/?token=p.eyJ1IjogIjRkNTVkYWQ5LTUyZTctNDMzOC04ODA1LTJkM2QxYzcxODQxYSIsICJpZCI6ICJjYTQwMzQwYy1lODc4LTRhZDgtYjM4NC1kOWFjYzE1Mzc1MWIifQ.JqDial1Ejv572AFZtS6Ts2y50-U5MdcoLGXLCYmfiJU&host=https%3A%2F%2Fui.us-east.tinybird.co"
          target="_blank"
          rel="noreferrer"
          className="text-primary font-semibold"
        >
          Analytics-star
        </a>
      </p>
      {!!token && (
        <a
          className="underline text-primary text-sm"
          href="https://github.com/redek-dp/analytics-star/"
          target="blank"
          rel="noreferrer"
        >
          Personalizar este painel
        </a>
      )}
    </footer>
  )
}
