import React, { useState } from 'react';
import { Brain, Zap, Target, Users, Play, Code, ChevronRight, Github } from 'lucide-react';

const PacmanAI = () => {
  const [activeAlgorithm, setActiveAlgorithm] = useState(0);

  const algorithms = [
    {
      name: "A* Search",
      description: "Optimal pathfinding using heuristic search with Manhattan distance",
      features: ["Guaranteed optimal solution", "Efficient memory usage", "Heuristic-guided exploration"],
      complexity: "O(b^d) where b is branching factor and d is depth",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      name: "Minimax Algorithm",
      description: "Adversarial search for optimal play against ghost opponents",
      features: ["Perfect play assumption", "Game tree exploration", "Optimal decision making"],
      complexity: "O(b^m) where m is maximum depth of game tree",
      icon: <Brain className="w-6 h-6 text-purple-600" />
    },
    {
      name: "Expectimax",
      description: "Probabilistic decision making for uncertain ghost behavior",
      features: ["Handles randomness", "Expected value calculation", "Robust against unpredictable opponents"],
      complexity: "O(b^m) with probabilistic branching",
      icon: <Zap className="w-6 h-6 text-amber-600" />
    },
    {
      name: "Multi-Agent Systems",
      description: "Coordinated behavior in environments with multiple intelligent agents",
      features: ["Agent coordination", "Distributed decision making", "Emergent behaviors"],
      complexity: "Exponential in number of agents",
      icon: <Users className="w-6 h-6 text-green-600" />
    }
  ];

  const projectHighlights = [
    {
      title: "Search Algorithms Implementation",
      description: "Implemented depth-first search, breadth-first search, uniform cost search, and A* search algorithms for optimal pathfinding in maze environments.",
      technologies: ["Python", "Graph Theory", "Heuristic Search", "Algorithm Optimization"]
    },
    {
      title: "Adversarial Game Playing",
      description: "Developed minimax and expectimax algorithms with alpha-beta pruning for competitive gameplay against intelligent ghost agents.",
      technologies: ["Game Theory", "Minimax", "Alpha-Beta Pruning", "Decision Trees"]
    },
    {
      title: "Reinforcement Learning Agent",
      description: "Created Q-learning and approximate Q-learning agents that learn optimal policies through trial and error in dynamic environments.",
      technologies: ["Q-Learning", "Temporal Difference", "Function Approximation", "Policy Learning"]
    },
    {
      title: "Multi-Agent Coordination",
      description: "Designed cooperative and competitive multi-agent systems with communication protocols and distributed decision making.",
      technologies: ["Multi-Agent Systems", "Distributed AI", "Agent Communication", "Coordination Protocols"]
    }
  ];

  const achievements = [
    { metric: "100%", label: "Algorithm Accuracy", description: "Perfect implementation of all search algorithms" },
    { metric: "15+", label: "AI Techniques", description: "Different AI methods implemented and tested" },
    { metric: "4", label: "Search Strategies", description: "From uninformed to informed search algorithms" },
    { metric: "95%", label: "Win Rate", description: "Against baseline ghost agents using optimal strategies" }
  ];

  return (
    <section id="pacman-ai" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span className="text-indigo-600 font-bold text-lg">AI Research Project</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pacman AI Agent with Search Algorithms
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Developed intelligent Pacman agents using classical AI search algorithms and modern reinforcement learning techniques. 
            This comprehensive project demonstrates mastery of fundamental AI concepts through practical implementation.
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As part of my research assistant role in Artificial Intelligence at the University of New Haven, 
                I implemented a comprehensive Pacman AI system that showcases various search algorithms, 
                game-playing strategies, and machine learning techniques.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The project demonstrates practical applications of AI theory, from basic search algorithms 
                to advanced multi-agent systems and reinforcement learning, providing a solid foundation 
                for understanding intelligent agent behavior in complex environments.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">Artificial Intelligence</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Search Algorithms</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Game Theory</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Reinforcement Learning</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{achievement.metric}</div>
                    <div className="text-indigo-200 font-medium mb-1">{achievement.label}</div>
                    <div className="text-indigo-100 text-sm">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Algorithm Showcase */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Algorithms Implemented</h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-wrap border-b border-gray-200">
              {algorithms.map((algorithm, index) => (
                <button
                  key={index}
                  onClick={() => setActiveAlgorithm(index)}
                  className={`flex-1 min-w-[200px] px-6 py-4 font-semibold transition-all duration-300 ${
                    activeAlgorithm === index
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {algorithm.icon}
                    {algorithm.name}
                  </div>
                </button>
              ))}
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {algorithms[activeAlgorithm].name}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {algorithms[activeAlgorithm].description}
                  </p>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Features:</h5>
                    <ul className="space-y-2">
                      {algorithms[activeAlgorithm].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <ChevronRight size={16} className="text-indigo-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Time Complexity:</h5>
                    <code className="text-sm text-gray-700">{algorithms[activeAlgorithm].complexity}</code>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-green-400 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 text-white">
                    <Code size={16} />
                    <span>Algorithm Implementation</span>
                  </div>
                  <div className="space-y-2">
                    <div><span className="text-blue-400">def</span> <span className="text-yellow-400">{algorithms[activeAlgorithm].name.toLowerCase().replace(/[^a-z]/g, '_')}_search</span><span className="text-white">(problem):</span></div>
                    <div className="ml-4"><span className="text-gray-400"># Initialize data structures</span></div>
                    <div className="ml-4"><span className="text-white">frontier = PriorityQueue()</span></div>
                    <div className="ml-4"><span className="text-white">explored = set()</span></div>
                    <div className="ml-4 mt-2"><span className="text-blue-400">while</span> <span className="text-white">not frontier.isEmpty():</span></div>
                    <div className="ml-8"><span className="text-white">node = frontier.pop()</span></div>
                    <div className="ml-8"><span className="text-blue-400">if</span> <span className="text-white">problem.isGoalState(node):</span></div>
                    <div className="ml-12"><span className="text-blue-400">return</span> <span className="text-white">solution_path</span></div>
                    <div className="ml-4 mt-2"><span className="text-gray-400"># Expand and evaluate successors</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Technical Implementation</h3>
            <p className="text-indigo-100 max-w-3xl mx-auto">
              A comprehensive AI system demonstrating various search strategies and learning algorithms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-yellow-300" />
                <h4 className="text-xl font-bold">Search Algorithms</h4>
              </div>
              <ul className="space-y-2 text-indigo-100">
                <li>• Depth-First Search (DFS)</li>
                <li>• Breadth-First Search (BFS)</li>
                <li>• Uniform Cost Search (UCS)</li>
                <li>• A* with Manhattan Heuristic</li>
                <li>• Greedy Best-First Search</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-yellow-300" />
                <h4 className="text-xl font-bold">Game Playing</h4>
              </div>
              <ul className="space-y-2 text-indigo-100">
                <li>• Minimax with Alpha-Beta Pruning</li>
                <li>• Expectimax for Stochastic Games</li>
                <li>• Evaluation Function Design</li>
                <li>• Multi-Agent Game Trees</li>
                <li>• Strategic Decision Making</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-300" />
                <h4 className="text-xl font-bold">Reinforcement Learning</h4>
              </div>
              <ul className="space-y-2 text-indigo-100">
                <li>• Q-Learning Implementation</li>
                <li>• Approximate Q-Learning</li>
                <li>• Feature-Based Learning</li>
                <li>• Policy Iteration</li>
                <li>• Value Function Approximation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gameplay Videos (Google Drive) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gameplay Videos</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { url: "https://drive.google.com/file/d/1W06LWEic_xuaZARmZf-jfz-xJrpLnd-6/preview", caption: "A* & Search Algorithms" },
              { url: "https://drive.google.com/file/d/1Fmc5a43sFGgb4YsZ_3ifRzkFmuPsExNU/preview", caption: "Reinforcement Learning" },
              { url: "https://drive.google.com/file/d/1S4_zDYv00Zk2R94knLJiB88gcQXycB0w/preview", caption: "Multi-Agent Systems" },
            ].map((v, i) => (
              <figure key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gray-100">
                  <iframe
                    src={v.url}
                    title={v.caption}
                    allow="autoplay"
                    className="w-full h-full"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-gray-700">{v.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Research Impact & Learning Outcomes</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This project provided hands-on experience with fundamental AI concepts and their practical applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Optimal Pathfinding</h4>
              <p className="text-gray-600 text-sm">Mastered heuristic search algorithms for efficient navigation in complex environments</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Game Theory</h4>
              <p className="text-gray-600 text-sm">Applied adversarial search and strategic thinking in competitive environments</p>
            </div>
            
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Machine Learning</h4>
              <p className="text-gray-600 text-sm">Implemented reinforcement learning agents that learn optimal policies through experience</p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Multi-Agent Systems</h4>
              <p className="text-gray-600 text-sm">Designed coordinated behavior in environments with multiple intelligent agents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacmanAI;
