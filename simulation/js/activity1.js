let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    a = random1(4, 8);
    //a = 4;
    //b = random1(2, 4);
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        

        <div class="fs-16px">
        <h5>Golden Search to Find Minima</h5>
        <p>Learning Objective: Use golden search to find minima.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
//for starting first activity
function start_act1() {
    console.log('a,b', a, b);
    calculate_data();
    calculate_chart_data();
    console.log('data', data);
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Generated Dataset', 'tb1-box');
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

		<h4>Given that </h4>
		<div style='text-align: center;'>$$ f(x) = x^2 - 4x + ${a}  $$</div>
    <br>
    
		<h5>Take golden ratio $$ \ϕ = 1.618$$</h5>
    
    <h5>Take interval $$ x_L = ${data[0][0]} $$ $$ x_U = ${data[0][1]} $$</h5>
    
    <br>
		<h4>Iteration 1: </h4>
    <div id='itr1-div'>
      <div class="text-center" id="itr1-d-div">
        <div class="row justify-content-center" style="align-items:center;">
          <div class="col-lg-4">
            $$ d = (\ϕ - 1)(x_U - x_L) =  $$
          </div>
          <div class="col-lg-4">
            <input type='number' id='itr1-d-inp' class='form-control fs-16px' />
          </div>
        </div>
        <button class='btn btn-info std-btn' onclick='verify_itr1_d();' style='position: relative; left: 0w;' id='vf-itr1-d-btn'>Verify</button>
      </div>
    </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    //pivot_a_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    setTimeout(() => show_step('tb1-box'), 150);
}
function verify_itr1_d() {
    let itr1_d_inp = (document.getElementById('itr1-d-inp'));
    let itr1_div = (document.getElementById('itr1-div'));
    let itr1_d_div = (document.getElementById('itr1-d-div'));
    console.log(data[0][2]);
    if (!verify_values(parseFloat(itr1_d_inp.value), data[0][2])) {
        alert('Incorrect value!!');
        return;
    }
    itr1_d_div.innerHTML = '';
    itr1_d_div.innerHTML = `
    <div>
      $$ d = (\ϕ - 1)(x_U - x_L) = ${data[0][2]}  $$
    </div>
  `;
    itr1_div.innerHTML += `
    <div class="text-center" id="itr1-x-div">
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ x_1 = x_L + d =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr1-x1-inp' class='form-control fs-16px' />
        </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ x_2 = x_U - d =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr1-x2-inp' class='form-control fs-16px' />
        </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_itr1_x();' style='position: relative; left: 0w;' id='vf-itr1-x-btn'>Verify</button>
    </div>
  `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function verify_itr1_x() {
    let itr1_x_div = (document.getElementById('itr1-x-div'));
    let itr1_div = (document.getElementById('itr1-div'));
    let itr1_x1_inp = (document.getElementById('itr1-x1-inp'));
    let itr1_x2_inp = (document.getElementById('itr1-x2-inp'));
    console.log(data[0][3], data[0][4]);
    if (!verify_values(parseFloat(itr1_x1_inp.value), data[0][3])) {
        alert('Incorrect x₁ value!!');
        return;
    }
    if (!verify_values(parseFloat(itr1_x2_inp.value), data[0][4])) {
        alert('Incorrect x₂ value!!');
        return;
    }
    itr1_x_div.innerHTML = '';
    itr1_x_div.innerHTML = `
    <div>
          $$ x_1 = x_L + d = ${data[0][3]}  $$
    </div>
    <div>
          $$ x_2 = x_U - d = ${data[0][4]}  $$
    </div>
  `;
    itr1_div.innerHTML += `
    <div class="text-center" id="itr1-fx-div">
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ f(x_1) =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr1-fx1-inp' class='form-control fs-16px' />
        </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ f(x_2)  =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr1-fx2-inp' class='form-control fs-16px' />
        </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_itr1_fx();' style='position: relative; left: 0w;' id='vf-itr1-fx-btn'>Verify</button>
    </div>
  `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function verify_itr1_fx() {
    let itr1_fx_div = (document.getElementById('itr1-fx-div'));
    let tb1_box_div = (document.getElementById('tb1-box'));
    let itr1_fx1_inp = (document.getElementById('itr1-fx1-inp'));
    let itr1_fx2_inp = (document.getElementById('itr1-fx2-inp'));
    console.log(data[0][5], data[0][6]);
    if (!verify_values(parseFloat(itr1_fx1_inp.value), data[0][5])) {
        alert('Incorrect f(x₁) value!!');
        return;
    }
    if (!verify_values(parseFloat(itr1_fx2_inp.value), data[0][6])) {
        alert('Incorrect f(x₂) value!!');
        return;
    }
    itr1_fx_div.innerHTML = '';
    itr1_fx_div.innerHTML = `
    <div>
          $$ f(x_1) = ${data[0][5]}  $$
    </div>
    <div>
          $$ f(x_2) = ${data[0][6]}  $$
    </div>
  `;
    tb1_box_div.innerHTML += `
    <h5>New interval $$ x_L = ${data[1][0]} $$ $$ x_U = ${data[1][1]} $$</h5>
    <br>
    <div class='text-center'>
      <button class='btn btn-info std-btn' onclick='load_iteration2();' style='position: relative; left: 0w;' id='load-itr2-btn'>Next</button>
    </div>
    
  `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function load_iteration2() {
    let tb1_box_div = (document.getElementById('tb1-box'));
    document.getElementById('load-itr2-btn').remove();
    tb1_box_div.innerHTML += `
    <h4>Iteration 2:</h4>
    <div id='itr2-div'>
      <div class="text-center" id="itr2-d-div">
        <div class="row justify-content-center" style="align-items:center;">
          <div class="col-lg-4">
            $$ d = (\ϕ - 1)(x_U - x_L) =  $$
          </div>
          <div class="col-lg-4">
            <input type='number' id='itr2-d-inp' class='form-control fs-16px' />
          </div>
        </div>
        <button class='btn btn-info std-btn' onclick='verify_itr2_d();' style='position: relative; left: 0w;' id='vf-itr2-d-btn'>Verify</button>
      </div>
    </div>
  `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function verify_itr2_d() {
    let itr2_d_inp = (document.getElementById('itr2-d-inp'));
    let itr2_div = (document.getElementById('itr2-div'));
    let itr2_d_div = (document.getElementById('itr2-d-div'));
    console.log(data[1][2]);
    if (!verify_values(parseFloat(itr2_d_inp.value), data[1][2])) {
        alert('Incorrect value!!');
        return;
    }
    itr2_d_div.innerHTML = '';
    itr2_d_div.innerHTML = `
    <div>
      $$ d = (\ϕ - 1)(x_U - x_L) = ${data[1][2]}  $$
    </div>
  `;
    itr2_div.innerHTML += `
    <div class="text-center" id="itr2-x-div">
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ x_1 = x_L + d =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr2-x1-inp' class='form-control fs-16px' />
        </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ x_2 = x_U - d =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr2-x2-inp' class='form-control fs-16px' />
        </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_itr2_x();' style='position: relative; left: 0w;' id='vf-itr2-x-btn'>Verify</button>
    </div>
  `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function verify_itr2_x() {
    let itr2_x_div = (document.getElementById('itr2-x-div'));
    let itr2_div = (document.getElementById('itr2-div'));
    let itr2_x1_inp = (document.getElementById('itr2-x1-inp'));
    let itr2_x2_inp = (document.getElementById('itr2-x2-inp'));
    console.log(data[1][3], data[1][4]);
    if (!verify_values(parseFloat(itr2_x1_inp.value), data[1][3])) {
        alert('Incorrect x₁ value!!');
        return;
    }
    if (!verify_values(parseFloat(itr2_x2_inp.value), data[1][4])) {
        alert('Incorrect x₂ value!!');
        return;
    }
    itr2_x_div.innerHTML = '';
    itr2_x_div.innerHTML = `
    <div>
          $$ x_1 = x_L + d = ${data[1][3]}  $$
    </div>
    <div>
          $$ x_2 = x_U - d = ${data[1][4]}  $$
    </div>
  `;
    itr2_div.innerHTML += `
    <div class="text-center" id="itr2-fx-div">
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ f(x_1) =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr2-fx1-inp' class='form-control fs-16px' />
        </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
        <div class="col-lg-4">
          $$ f(x_2)  =  $$
        </div>
        <div class="col-lg-4">
          <input type='number' id='itr2-fx2-inp' class='form-control fs-16px' />
        </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_itr2_fx();' style='position: relative; left: 0w;' id='vf-itr2-fx-btn'>Verify</button>
    </div>
  `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function verify_itr2_fx() {
    let itr2_fx_div = (document.getElementById('itr2-fx-div'));
    let tb1_box_div = (document.getElementById('tb1-box'));
    let itr2_fx1_inp = (document.getElementById('itr2-fx1-inp'));
    let itr2_fx2_inp = (document.getElementById('itr2-fx2-inp'));
    console.log(data[1][5], data[1][6]);
    if (!verify_values(parseFloat(itr2_fx1_inp.value), data[1][5])) {
        alert('Incorrect f(x₁) value!!');
        return;
    }
    if (!verify_values(parseFloat(itr2_fx2_inp.value), data[1][6])) {
        alert('Incorrect f(x₂) value!!');
        return;
    }
    itr2_fx_div.innerHTML = '';
    itr2_fx_div.innerHTML = `
    <div>
          $$ f(x_1) = ${data[1][5]}  $$
    </div>
    <div>
          $$ f(x_2) = ${data[1][6]}  $$
    </div>
  `;
    tb1_box_div.innerHTML += `
    <h5>New interval $$ x_L = ${data[2][0]} $$ $$ x_U = ${data[2][1]} $$</h5>
    <br>
    <div class='text-center'>
      <button class='btn btn-info std-btn' onclick='load_table();' style='position: relative; left: 0w;' id='load-table-btn'>Next</button>
    </div>
    <div class='text-center' id="table-div"></div>
  `;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
}
function load_table() {
    document.getElementById('load-table-btn').remove();
    let tb1_box_div = (document.getElementById('tb1-box'));
    let tab_div = (document.getElementById('table-div'));
    for (let i = 0; i < data.length; i++) {
        data[i].unshift(i + 1);
    }
    let tab_head = [
        'Iter',
        'x<sub>L</sub>',
        'x<sub>U</sub>',
        'd',
        'x<sub>1</sub>',
        'x<sub>2</sub>',
        'f(x<sub>1</sub>)',
        'f(x<sub>2</sub>)',
    ];
    let tab = new Show_Table(tab_head, data, tab_div);
    tab.load_table();
    tb1_box_div.innerHTML += `
  <div id='plot-graph-btn-div' class='text-center'>
    <button class='btn btn-info std-btn' onclick='plot_graph();' style='position: relative; left: 0w;' id='plot-graph-btn'>Plot Graph</button>
  </div>
  <div class='text-center flex flex-col items-center' id='graph-div'>
      <canvas id='plt-x-y'></canvas>
  </div>
  <div class="text-center mt-5" id='smallest-fx-div'>
  </div>
  `;
}
function calculate_data() {
    let d;
    let x1;
    let x2;
    let f_x1;
    let f_x2;
    let x_l = data[0][0];
    let x_u = data[0][1];
    for (let i = 0; i < 20; i++) {
        d = Number(((golden_ratio - 1) * (x_u - x_l)).toFixed(3));
        x1 = Number((x_l + d).toFixed(3));
        x2 = Number((x_u - d).toFixed(3));
        f_x1 = Number((Math.pow(x1, 2) - 4 * x1 + a).toFixed(3));
        f_x2 = Number((Math.pow(x2, 2) - 4 * x2 + a).toFixed(3));
        if (f_x1 < f_x2) {
            x_l = x2;
        }
        else {
            x_u = x1;
        }
        const arr = [d, x1, x2, f_x1, f_x2];
        data[i].push(...arr);
        if (i < 19) {
            const arr1 = [x_l, x_u];
            data.push(arr1);
        }
    }
}
function calculate_chart_data() {
    for (let i = 0; i < 4.1; i += 0.1) {
        chart_x_data.push(Number(i.toFixed(1)));
        let fx = Number((Math.pow(i, 2) / a - b * Math.sin(i)).toFixed(3));
        smallest_fx = Math.min(smallest_fx || fx, fx);
        chart_y_data.push(fx);
    }
    console.log('smallest_fx', smallest_fx);
}
function plot_graph() {
    console.log(chart_x_data);
    console.log(chart_y_data);
    let btn_div = (document.getElementById('plot-graph-btn-div'));
    btn_div && btn_div.remove();
    let div = (document.getElementById('graph-div'));
    div.style.display = 'block';
    // root.id = "act8";
    var ctx = document.getElementById('plt-x-y');
    ctx.style.backgroundColor = 'white';
    ctx.style.marginTop = '5px';
    ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    let x_data;
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: chart_x_data,
            datasets: [
                {
                    label: 'f(x)',
                    data: chart_y_data,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'f(x)',
                        font: { size: 14, weight: 'bold' },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'x',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'f(x) vs x',
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
    setTimeout(() => graph_ques(), 200);
}
function graph_ques() {
    let smallest_fx_div = (document.getElementById('smallest-fx-div'));
    smallest_fx_div.innerHTML += `
      <div class="row justify-content-center my-2" style="align-items:center;">
        <div class="col-lg-4">
          From graph minimum value of f(x) = 
        </div>
        <div class="col-lg-4">
          <input type='number' id='smallest-fx-inp' class='form-control fs-16px' />
        </div>
      </div>
      <button class='btn btn-info std-btn' onclick='verify_smallest_fx();' style='position: relative; left: 0w;' id='vf-smallest-fx-btn'>Verify</button>
  `;
}
function verify_smallest_fx() {
    let smallest_fx_inp = (document.getElementById('smallest-fx-inp'));
    let smallest_fx_div = (document.getElementById('smallest-fx-div'));
    console.log('min f(x)', smallest_fx);
    if (parseFloat(smallest_fx_inp.value) !== smallest_fx) {
        alert('Incorrect f(x) value!!');
        return;
    }
    smallest_fx_div.innerHTML = '';
    smallest_fx_div.innerHTML = `
    <div>
      From graph minimum value of f(x) = ${smallest_fx} 
    </div>
    <button class='btn btn-info std-btn' onclick='exp_end();' style='position: relative; left: 0w;' id='exp-end-btn'>Next</button>
  `;
}
function exp_end() {
    document.getElementById('exp-end-btn').remove();
    alert('Experiment Completed!!');
}
activity1();
//# sourceMappingURL=activity1.js.map