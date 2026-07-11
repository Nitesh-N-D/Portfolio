export interface JourneyStop {
  id: string;
  place: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
}

export const journeyMap = {
  label: "Journey Map",
  title: "Gingee to Chrompet",
  badge: "School to Computer Science Engineering",
  routeLabel: "Education Route",
  ariaLabel: "Education journey route from Gingee to Chrompet",
  stops: [
    {
      id: "school",
      place: "Gingee, Villupuram Dt.",
      x: 24,
      y: 70,
      labelX: 8,
      labelY: 62
    },
    {
      id: "bachelors",
      place: "Chrompet, Chengalpattu",
      x: 76,
      y: 34,
      labelX: 71,
      labelY: 20
    }
  ] satisfies JourneyStop[]
};
