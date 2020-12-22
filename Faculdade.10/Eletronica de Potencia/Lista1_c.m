clc
clear 

alfa = [0, pi/6, pi/4, pi/2, (2*pi)/3, (17*pi)/18];

fprintf('\n==========================================================');
fprintf('\nExercicio 3\n');

Vp = 177.6;
r = 30;

for i = 1: length(alfa)-1
  fprintf('\nPara %d°\n', rad2deg(alfa(i)))
  Vmed = (Vp / pi) * (1 + cos(alfa(i)))
  Vrms = (Vp / sqrt(2)) * sqrt(1 - (alfa(i)/pi) + (sin(2 * alfa(i))/(2*pi)))
  P = Vrms^2 / r
end

fprintf('\n==========================================================');
fprintf('\nExercicio 4\n');

Vp = 89;
r = 50;

for i = 1: length(alfa)
  if (i != 2)
    fprintf('\nPara %d°\n', rad2deg(alfa(i)))
    Vmed = (Vp / (2*pi)) * (1 + cos(alfa(i)))
    Vrms = (Vp / sqrt(2)) * sqrt((1/2) - (alfa(i)/(2*pi)) + (sin(2 * alfa(i))/(4*pi)))
    P = Vrms^2 / r
  end
end