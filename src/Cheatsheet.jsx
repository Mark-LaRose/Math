// Cheatsheet.js
import React from 'react';

// Data for the cheatsheet, organized by mathematical types
const cheatsheetData = {
  Arithmetic: [
    {
      concept: 'Addition: a + b = c',
      explanation: 'Addition is the process of combining two or more numbers to get a total sum.',
      examples: [
        '3 + 2 = 5',
        '37 + 37 = 74',
        '500 + 500 = 1000'
      ]
    },
    {
      concept: 'Subtraction: a - b = c',
      explanation: 'Subtraction is the process of taking one number away from another.',
      examples: [
        '5 - 2 = 3',
        '60 - 23 = 37',
        '300 - 200 = 100'
      ]
    },
    {
      concept: 'Multiplication: a x b = c',
      explanation: 'Multiplication is the process of combining equal groups to find the total number of items.',
      examples: [
        '3 x 2 = 6',
        '4 x 5 = 20',
        '7 x 8 = 56'
      ]
    },
    {
      concept: 'Division: a ÷ b = c',
      explanation: 'Division is the process of splitting a number into equal parts.',
      examples: [
        '6 ÷ 2 = 3',
        '8 ÷ 4 = 2',
        '10 ÷ 5 = 2'
      ]
    }
  ],
  Algebra: [
    {
      concept: 'Solving Equations: ax + b = 0',
      explanation: 'To solve linear equations, isolate the variable x by performing inverse operations.',
      examples: [
        '2x + 3 = 0',
        '4x - 5 = 0',
        'x + 6 = 0'
      ]
    },
    {
      concept: 'Quadratic Formula: x = (-b ± √(b²-4ac)) / 2a',
      explanation: 'The quadratic formula is used to find the solutions of a quadratic equation.',
      examples: [
        'x = (-1 ± √(1²-4*1*-6)) / 2*1',
        'x = (-2 ± √(2²-4*2*-8)) / 2*2',
        'x = (3 ± √(3²-4*3*3)) / 2*3'
      ]
    },
    {
      concept: 'Functions: f(x) = ax² + bx + c',
      explanation: 'A function defines a relationship between inputs (x) and outputs (f(x)).',
      examples: [
        'f(x) = 2x² + 3x + 1',
        'f(x) = x² - 4x + 4',
        'f(x) = 5x² + 2x + 9'
      ]
    },
    {
      concept: 'Inequalities: ax + b > 0',
      explanation: 'Inequalities express a relationship where one side is greater than (or less than) the other.',
      examples: [
        '2x + 3 > 0',
        '4x - 5 > 0',
        'x + 6 > 0'
      ]
    }
  ],
  Geometry: [
    {
      concept: 'Area of Circle: πr²',
      explanation: 'The area of a circle is found by multiplying π by the square of the radius (r).',
      examples: [
        'Area when r = 3: π*3² = 28.27',
        'Area when r = 5: π*5² = 78.54',
        'Area when r = 7: π*7² = 153.94'
      ]
    },
    {
      concept: 'Perimeter of Circle: 2πr',
      explanation: 'The perimeter (circumference) of a circle is found by multiplying 2π by the radius (r).',
      examples: [
        'Perimeter when r = 3: 2π*3 = 18.85',
        'Perimeter when r = 5: 2π*5 = 31.42',
        'Perimeter when r = 7: 2π*7 = 43.98'
      ]
    },
    {
      concept: 'Area of Rectangle: l * w',
      explanation: 'The area of a rectangle is found by multiplying its length (l) by its width (w).',
      examples: [
        'Area when l = 4, w = 5: 4 * 5 = 20',
        'Area when l = 6, w = 7: 6 * 7 = 42',
        'Area when l = 8, w = 9: 8 * 9 = 72'
      ]
    },
    {
      concept: 'Pythagorean Theorem: a² + b² = c²',
      explanation: 'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse (c) is equal to the sum of the squares of the other two sides (a and b).',
      examples: [
        'When a = 3, b = 4: 3² + 4² = 9 + 16 = 25',
        'When a = 5, b = 12: 5² + 12² = 25 + 144 = 169',
        'When a = 8, b = 15: 8² + 15² = 64 + 225 = 289'
      ]
    }
  ],
  Trigonometry: [
    {
      concept: 'sin(θ) = Opposite / Hypotenuse',
      explanation: 'The sine of an angle in a right triangle is the length of the opposite side divided by the length of the hypotenuse.',
      examples: [
        'sin(30°) = 1 / 2',
        'sin(45°) = √2 / 2',
        'sin(60°) = √3 / 2'
      ]
    },
    {
      concept: 'cos(θ) = Adjacent / Hypotenuse',
      explanation: 'The cosine of an angle in a right triangle is the length of the adjacent side divided by the length of the hypotenuse.',
      examples: [
        'cos(30°) = √3 / 2',
        'cos(45°) = √2 / 2',
        'cos(60°) = 1 / 2'
      ]
    },
    {
      concept: 'tan(θ) = Opposite / Adjacent',
      explanation: 'The tangent of an angle in a right triangle is the length of the opposite side divided by the length of the adjacent side.',
      examples: [
        'tan(30°) = 1 / √3',
        'tan(45°) = 1',
        'tan(60°) = √3'
      ]
    },
    {
      concept: 'csc(θ) = 1 / sin(θ)',
      explanation: 'The cosecant of an angle is the reciprocal of the sine.',
      examples: [
        'csc(30°) = 2',
        'csc(45°) = √2',
        'csc(60°) = 2 / √3'
      ]
    },
    {
      concept: 'sec(θ) = 1 / cos(θ)',
      explanation: 'The secant of an angle is the reciprocal of the cosine.',
      examples: [
        'sec(30°) = 2 / √3',
        'sec(45°) = √2',
        'sec(60°) = 2'
      ]
    },
    {
      concept: 'cot(θ) = 1 / tan(θ)',
      explanation: 'The cotangent of an angle is the reciprocal of the tangent.',
      examples: [
        'cot(30°) = √3',
        'cot(45°) = 1',
        'cot(60°) = 1 / √3'
      ]
    }
  ],
  Calculus: [
    {
      concept: 'Derivative: d/dx',
      explanation: 'The derivative measures how a function changes as its input changes. It is the slope of the function at any given point.',
      examples: [
        'd/dx of x² = 2x',
        'd/dx of x³ = 3x²',
        'd/dx of x^n = nx^(n-1)'
      ]
    },
    {
      concept: 'Integral: ∫',
      explanation: 'The integral measures the accumulation of quantities and can be thought of as the area under a curve.',
      examples: [
        '∫ x dx = x²/2 + C',
        '∫ x² dx = x³/3 + C',
        '∫ x^n dx = x^(n+1)/(n+1) + C'
      ]
    },
    {
      concept: 'Limits: lim x→a',
      explanation: 'The limit describes the value that a function approaches as the input approaches some value.',
      examples: [
        'lim x→0 (sin(x)/x) = 1',
        'lim x→∞ (1/x) = 0',
        'lim x→a (x^n) = a^n'
      ]
    },
    {
      concept: 'Chain Rule: (f(g(x)))\' = f\'(g(x)) * g\'(x)',
      explanation: 'The chain rule is used to find the derivative of composite functions.',
      examples: [
        'If f(x) = (3x + 2)^2, then f\'(x) = 2(3x + 2)*3',
        'If f(x) = (x² + 1)^3, then f\'(x) = 3(x² + 1)²*2x',
        'If f(x) = sin(3x), then f\'(x) = cos(3x)*3'
      ]
    }
  ],
  'Linear Algebra': [
    {
      concept: 'Matrix Multiplication: AB',
      explanation: 'Matrix multiplication involves multiplying the rows of the first matrix by the columns of the second matrix.',
      examples: [
        'A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]], then AB = [[19, 22], [43, 50]]',
        'A = [[2, 0], [1, 3]], B = [[1, 4], [2, 5]], then AB = [[2, 8], [7, 19]]',
        'A = [[1, 1], [1, 1]], B = [[2, 2], [2, 2]], then AB = [[4, 4], [4, 4]]'
      ]
    },
    {
      concept: 'Determinant: det(A)',
      explanation: 'The determinant of a matrix is a special number that can be calculated from its elements and reveals certain properties of the matrix.',
      examples: [
        'A = [[1, 2], [3, 4]], det(A) = 1*4 - 2*3 = -2',
        'A = [[2, 0], [1, 3]], det(A) = 2*3 - 0*1 = 6',
        'A = [[1, 1], [1, 1]], det(A) = 1*1 - 1*1 = 0'
      ]
    },
    {
      concept: 'Inverse: A⁻¹',
      explanation: 'The inverse of a matrix A is another matrix that, when multiplied with A, results in the identity matrix.',
      examples: [
        'A = [[1, 2], [3, 4]], A⁻¹ = 1/(-2)*[[4, -2], [-3, 1]]',
        'A = [[2, 0], [1, 3]], A⁻¹ = 1/6*[[3, 0], [-1, 2]]',
        'A = [[1, 1], [1, 1]], A⁻¹ = not invertible'
      ]
    },
    {
      concept: 'Eigenvalues: λ',
      explanation: 'Eigenvalues are scalars associated with a linear system of equations (i.e., a matrix equation) that provide information about the system\'s behavior.',
      examples: [
        'A = [[1, 2], [3, 4]], λ = (5 ± √33)/2',
        'A = [[2, 0], [1, 3]], λ = 2, 3',
        'A = [[1, 1], [1, 1]], λ = 0, 2'
      ]
    },
    {
      concept: 'Eigenvectors: v',
      explanation: 'Eigenvectors are vectors associated with a matrix that, when multiplied by the matrix, yield the same vector scaled by the corresponding eigenvalue.',
      examples: [
        'A = [[1, 2], [3, 4]], v = [[2/√5, 1/√5]]',
        'A = [[2, 0], [1, 3]], v = [[1, 0]]',
        'A = [[1, 1], [1, 1]], v = undefined'
      ]
    }
  ],
  Statistics: [
    {
      concept: 'Mean: (Σx) / n',
      explanation: 'The mean is the average of a set of numbers, calculated by dividing the sum of the numbers by the count of numbers.',
      examples: [
        'Mean of [1, 2, 3] = (1+2+3)/3 = 2',
        'Mean of [4, 5, 6] = (4+5+6)/3 = 5',
        'Mean of [7, 8, 9] = (7+8+9)/3 = 8'
      ]
    },
    {
      concept: 'Median: Middle Value',
      explanation: 'The median is the middle value in a set of numbers, which are arranged in ascending order.',
      examples: [
        'Median of [1, 3, 5] = 3',
        'Median of [2, 4, 6] = 4',
        'Median of [1, 2, 3, 4] = (2+3)/2 = 2.5'
      ]
    },
    {
      concept: 'Mode: Most Frequent Value',
      explanation: 'The mode is the number that appears most frequently in a data set.',
      examples: [
        'Mode of [1, 2, 2, 3] = 2',
        'Mode of [4, 4, 5, 5, 6] = 4, 5',
        'Mode of [7, 8, 9, 9] = 9'
      ]
    },
    {
      concept: 'Standard Deviation: √(Σ(x - μ)² / N)',
      explanation: 'The standard deviation measures the amount of variation or dispersion in a set of values.',
      examples: [
        'SD of [1, 2, 3] = √((1-2)²+(2-2)²+(3-2)²)/3 = 0.82',
        'SD of [4, 5, 6] = √((4-5)²+(5-5)²+(6-5)²)/3 = 0.82',
        'SD of [7, 8, 9] = √((7-8)²+(8-8)²+(9-8)²)/3 = 0.82'
      ]
    }
  ],
  Probability: [
    {
      concept: 'Probability of A: P(A) = Number of favorable outcomes / Total number of outcomes',
      explanation: 'Probability measures the likelihood of a specific event occurring out of all possible events.',
      examples: [
        'P(A) of rolling a 3 on a 6-sided die = 1/6',
        'P(A) of drawing a heart from a deck of cards = 1/4',
        'P(A) of flipping a head on a coin = 1/2'
      ]
    },
    {
      concept: 'Independent Events: P(A and B) = P(A) * P(B)',
      explanation: 'The probability of two independent events both occurring is the product of their individual probabilities.',
      examples: [
        'P(A and B) of rolling a 3 and then a 4 on a 6-sided die = 1/6 * 1/6 = 1/36',
        'P(A and B) of drawing a heart and then a diamond from a deck of cards = 1/4 * 1/4 = 1/16',
        'P(A and B) of flipping a head and then a tail on a coin = 1/2 * 1/2 = 1/4'
      ]
    },
    {
      concept: 'Conditional Probability: P(A|B) = P(A and B) / P(B)',
      explanation: 'Conditional probability measures the probability of an event occurring given that another event has already occurred.',
      examples: [
        'P(A|B) of drawing a heart given the first card was a heart = 1/4 * 1/4 / 1/4 = 1/4',
        'P(A|B) of rolling a 3 given the first roll was a 3 = 1/6 * 1/6 / 1/6 = 1/6',
        'P(A|B) of flipping a head given the first flip was a head = 1/2 * 1/2 / 1/2 = 1/2'
      ]
    },
    {
      concept: 'Bayes\' Theorem: P(A|B) = [P(B|A) * P(A)] / P(B)',
      explanation: 'Bayes\' theorem describes the probability of an event based on prior knowledge of conditions that might be related to the event.',
      examples: [
        'P(A|B) = [P(B|A) * P(A)] / P(B)',
        'Example: P(A|B) = [0.7 * 0.3] / 0.5 = 0.42',
        'Example: P(A|B) = [0.6 * 0.4] / 0.8 = 0.3'
      ]
    }
  ],
  'Discrete Mathematics': [
    {
      concept: 'Set: A collection of distinct objects',
      explanation: 'A set is a collection of distinct objects, considered as an object in its own right.',
      examples: [
        'A = {1, 2, 3}',
        'B = {a, b, c}',
        'C = {x | x is a prime number}'
      ]
    },
    {
      concept: 'Graph: A set of vertices and edges',
      explanation: 'A graph is a set of vertices (nodes) connected by edges (links).',
      examples: [
        'G = (V, E), where V = {1, 2, 3}, E = {(1,2), (2,3), (3,1)}',
        'G = (V, E), where V = {a, b, c}, E = {(a,b), (b,c), (c,a)}',
        'G = (V, E), where V = {x, y, z}, E = {(x,y), (y,z), (z,x)}'
      ]
    },
    {
      concept: 'Logic: Propositional and predicate logic',
      explanation: 'Logic is the study of reasoning. Propositional logic deals with propositions and their connectives. Predicate logic extends propositional logic with quantifiers and predicates.',
      examples: [
        'Propositional: p ∧ q',
        'Predicate: ∀x P(x)',
        'Predicate: ∃x Q(x)'
      ]
    },
    {
      concept: 'Combinatorics: Counting, permutations, combinations',
      explanation: 'Combinatorics is the study of counting, arranging, and grouping objects.',
      examples: [
        'Counting: 5! = 120',
        'Permutations: P(5, 3) = 60',
        'Combinations: C(5, 3) = 10'
      ]
    }
  ],
  'Number Theory': [
    {
      concept: 'Prime Numbers: A number greater than 1 with no positive divisors other than 1 and itself',
      explanation: 'Prime numbers are numbers greater than 1 that have no divisors other than 1 and themselves.',
      examples: [
        '2, 3, 5, 7, 11',
        '13, 17, 19, 23, 29',
        '31, 37, 41, 43, 47'
      ]
    },
    {
      concept: 'Greatest Common Divisor: The largest positive integer that divides two integers without a remainder',
      explanation: 'The greatest common divisor (GCD) of two numbers is the largest positive integer that divides both numbers without leaving a remainder.',
      examples: [
        'GCD of 8 and 12 is 4',
        'GCD of 18 and 24 is 6',
        'GCD of 20 and 28 is 4'
      ]
    },
    {
      concept: 'Modular Arithmetic: Arithmetic for integers, where numbers "wrap around" upon reaching a certain value—the modulus',
      explanation: 'Modular arithmetic is a system of arithmetic for integers, where numbers "wrap around" after reaching a certain value—the modulus.',
      examples: [
        '7 mod 3 = 1',
        '10 mod 4 = 2',
        '14 mod 5 = 4'
      ]
    },
    {
      concept: 'Fermat\'s Little Theorem: If p is a prime number, then for any integer a, the number a^p - a is an integer multiple of p',
      explanation: 'Fermat\'s Little Theorem states that if p is a prime number, then for any integer a, the number a^p - a is an integer multiple of p.',
      examples: [
        'a = 2, p = 3: 2^3 - 2 = 6, which is multiple of 3',
        'a = 3, p = 5: 3^5 - 3 = 240, which is multiple of 5',
        'a = 4, p = 7: 4^7 - 4 = 16380, which is multiple of 7'
      ]
    }
  ],
  'Differential Equations': [
    {
      concept: 'Ordinary Differential Equation: An equation containing a function of one independent variable and its derivatives',
      explanation: 'An ordinary differential equation (ODE) is an equation containing a function of one independent variable and its derivatives.',
      examples: [
        'dy/dx = 3x + 2',
        'd²y/dx² + dy/dx - 6y = 0',
        'dy/dx = y(1-y)'
      ]
    },
    {
      concept: 'Partial Differential Equation: An equation containing a function of multiple independent variables and its partial derivatives',
      explanation: 'A partial differential equation (PDE) is an equation containing a function of multiple independent variables and its partial derivatives.',
      examples: [
        '∂u/∂t = k∂²u/∂x²',
        '∂²u/∂x² + ∂²u/∂y² = 0',
        '∂u/∂t + c∂u/∂x = 0'
      ]
    },
    {
      concept: 'Laplace Transform: A technique used to simplify solving linear differential equations',
      explanation: 'The Laplace transform is a technique used to simplify solving linear differential equations.',
      examples: [
        'L{f(t)} = ∫[0, ∞] e^(-st) f(t) dt',
        'L{sin(at)} = a / (s² + a²)',
        'L{cos(at)} = s / (s² + a²)'
      ]
    },
    {
      concept: 'Fourier Series: A way to represent a function as the sum of simple sine waves',
      explanation: 'A Fourier series is a way to represent a function as the sum of simple sine waves.',
      examples: [
        'f(x) = a₀ + Σ (aₙ cos(nx) + bₙ sin(nx))',
        'f(x) = 1/2 + cos(x) + cos(2x)/4 + cos(3x)/9 + ...',
        'f(x) = 2sin(x) + sin(3x)/3 + sin(5x)/5 + ...'
      ]
    }
  ],
  'Mathematical Logic': [
    {
      concept: 'Propositional Logic: A branch of logic that deals with propositions which can be true or false',
      explanation: 'Propositional logic is a branch of logic that deals with propositions which can be true or false.',
      examples: [
        'p: It is raining',
        'q: It is cold',
        'r: It is raining and it is cold'
      ]
    },
    {
      concept: 'Predicate Logic: Extends propositional logic to include relations and quantifiers',
      explanation: 'Predicate logic extends propositional logic to include relations and quantifiers.',
      examples: [
        '∀x P(x): P(x) is true for all x',
        '∃x Q(x): There exists an x for which Q(x) is true',
        'R(x, y): x is related to y'
      ]
    },
    {
      concept: 'Logical Connectives: AND, OR, NOT, IMPLIES',
      explanation: 'Logical connectives are used to combine or modify propositions in propositional logic.',
      examples: [
        'p ∧ q: p and q',
        'p ∨ q: p or q',
        '¬p: not p',
        'p → q: p implies q'
      ]
    },
    {
      concept: 'Proof Techniques: Direct proof, proof by contradiction, proof by induction',
      explanation: 'Proof techniques are methods used to prove mathematical statements.',
      examples: [
        'Direct Proof: Assume p, show q',
        'Proof by Contradiction: Assume ¬q, show contradiction',
        'Proof by Induction: Base case, induction step'
      ]
    }
  ],
  'Set Theory': [
    {
      concept: 'Set: A collection of distinct objects',
      explanation: 'A set is a collection of distinct objects, considered as an object in its own right.',
      examples: [
        'A = {1, 2, 3}',
        'B = {a, b, c}',
        'C = {x | x is a prime number}'
      ]
    },
    {
      concept: 'Subset: A set A is a subset of a set B if all elements of A are also elements of B',
      explanation: 'A subset is a set whose elements are all contained within another set.',
      examples: [
        'A = {1, 2}, B = {1, 2, 3}, A ⊆ B',
        'C = {a}, D = {a, b, c}, C ⊆ D',
        'E = {x}, F = {x, y, z}, E ⊆ F'
      ]
    },
    {
      concept: 'Union: The set containing all elements of A or B',
      explanation: 'The union of two sets is the set containing all elements of either set.',
      examples: [
        'A = {1, 2}, B = {2, 3}, A ∪ B = {1, 2, 3}',
        'C = {a, b}, D = {b, c}, C ∪ D = {a, b, c}',
        'E = {x, y}, F = {y, z}, E ∪ F = {x, y, z}'
      ]
    },
    {
      concept: 'Intersection: The set containing all elements of A and B',
      explanation: 'The intersection of two sets is the set containing all elements common to both sets.',
      examples: [
        'A = {1, 2}, B = {2, 3}, A ∩ B = {2}',
        'C = {a, b}, D = {b, c}, C ∩ D = {b}',
        'E = {x, y}, F = {y, z}, E ∩ F = {y}'
      ]
    }
  ]
};

// Component to display the cheatsheet based on the selected math type
const Cheatsheet = ({ selectedMathType }) => {
  const items = cheatsheetData[selectedMathType];

  if (!items) {
    return <div className="text-white">No data available for {selectedMathType}</div>;
  }

  // Types that should be displayed in a single column
  const singleColumnTypes = [
    'Set Theory',
    'Mathematical Logic',
    'Differential Equations',
    'Number Theory',
    'Discrete Mathematics',
    'Probability',
    'Statistics',
    'Linear Algebra'
  ];

  const isSingleColumn = singleColumnTypes.includes(selectedMathType);

  return (
    <div className="cheatsheet-container flex justify-center">
      <div className="cheatsheet bg-gray-800 p-10 rounded-lg shadow-lg text-white w-full max-w-screen-lg">
        <h2 className="font-indie-flower text-7xl mb-7 mt-6 text-center cs-header">{selectedMathType}</h2>
        <div className={isSingleColumn ? 'cheatsheet-single-column' : 'cheatsheet-grid'}>
          {items.map((item, index) => (
            <div
              key={index}
              className="ml-10 p-4 bg-gray-700 rounded-lg flex flex-col items-center"
              style={{ maxWidth: '90%', wordBreak: 'break-word' }}
            >
              <h3 className="text-2xl mt-4 mb-2 underline font-permanent-marker text-center">{item.concept.split(':')[0]}</h3>
              <h4 className="text-xl font-bold text-center">{item.concept.split(':')[1]}</h4>
              <p className="text-md mb-2 text-center">{item.explanation}</p>
              {item.examples && item.examples.length > 0 && (
                <div>
                  <h3 className="text-1xl mt-4 mb-2 font-permanent-marker text-center">Examples :</h3>
                  <ul className="list-disc list-inside ml-4">
                    {item.examples.map((example, exIndex) => (
                      <li key={exIndex}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cheatsheet;