export interface JourneyStop {
  id: string;
  phase: string;
  title: string;
  location: string;
  detail: string;
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
      phase: "School",
      title: "Saradha Matriculation Higher Secondary School",
      location: "Gingee, Villupuram Dt.",
      detail: "Completed my schooling and built my academic foundation in Tamil Nadu.",
      x: 24,
      y: 70,
      labelX: 8,
      labelY: 72
    },
    {
      id: "bachelors",
      phase: "Bachelor's Degree",
      title: "Madras Institute of Technology",
      location: "Chrompet, Chengalpattu",
      detail: "Studying Computer Science Engineering and building full-stack projects.",
      x: 76,
      y: 34,
      labelX: 71,
      labelY: 12
    }
  ] satisfies JourneyStop[]
};
